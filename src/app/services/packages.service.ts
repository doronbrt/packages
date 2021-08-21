import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import AlertModel from '../models/alert.model';
import CarrierModel from '../models/carrier.model';
import PackageRequestModel from '../models/package-request.model';
import PackageModel from '../models/package.model';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private http: HttpClient) { }
  private rapidBaseUrl = 'https://order-tracking.p.rapidapi.com';
  private apiUrl = 'http://localhost:3000';
  private carriersObs = new BehaviorSubject<any>(null);
  public isLoadingSub = new BehaviorSubject<boolean>(false);
  public isLoading = this.isLoadingSub.asObservable();

  public isAlertSub = new BehaviorSubject<AlertModel>({ isOpen: false, isSucceed: false });
  public isAlert = this.isAlertSub.asObservable();
  public allPackages = new BehaviorSubject<PackageModel[]>(null);

  getCarriersFromRapid(): Observable<any> {
    const url = `${this.rapidBaseUrl}/carriers`;
    return this.http.get(url, {
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': '84d32e8af3msha4adb17fe4ef230p17b049jsnf8d96b8680c7',
        'x-rapidapi-host': 'order-tracking.p.rapidapi.com'
      }
    });
  }
  private sortCarriers(a: CarrierModel, b: CarrierModel) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  }

  get carriers(): Observable<any> {
    if (!this.carriersObs.value) {
      // this.isLoadingSub.next(true);
      this.getCarriersFromRapid().pipe(untilDestroyed(this), map(a => a.data.map(b => ({ code: b.code, name: b.name })))).subscribe(c => {
        this.carriersObs.next(c.sort(this.sortCarriers));
        // this.isLoadingSub.next(false);
      });
    }
    return this.carriersObs.asObservable();
  }
  get packages(): Observable<PackageModel[]> {
    this.isLoadingSub.next(true);
    this.getAllPackages().pipe(untilDestroyed(this)).subscribe(p => {
      this.allPackages.next(p);
      this.isLoadingSub.next(false);
    }, () => { this.isLoadingSub.next(false); this.isAlertSub.next({ isOpen: true, isSucceed: false, text: 'Cant connect to the server' }) });
    return this.allPackages.asObservable();
  }

  getPackageFromRapid(pack: PackageRequestModel): Observable<any> {
    const url = `${this.rapidBaseUrl}/trackings/realtime`;
    return this.http.post<PackageRequestModel>(url, JSON.stringify({
      "tracking_number": pack.tracking_number,
      "carrier_code": pack.carrier_code
    }), {
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': '84d32e8af3msha4adb17fe4ef230p17b049jsnf8d96b8680c7',
        'x-rapidapi-host': 'order-tracking.p.rapidapi.com'
      }
    })
  }
  addPackage(pack: PackageModel) {
    const url = `${this.apiUrl}/packages`;
    return this.http.post<PackageModel[]>(url, pack);
  }
  deletePackage(pack: PackageModel) {
    const url = `${this.apiUrl}/packages`;
    return this.http.delete<PackageModel[]>(url, { body: pack }).pipe(tap(() => this.packages));
  }

  getAllPackages(): Observable<PackageModel[]> {
    const url = `${this.apiUrl}/packages`;
    return this.http.get<PackageModel[]>(url);
  }

  getPackgesFromApi(packages: PackageModel[]): Observable<any>[] {
    let b = [];
    if (packages.length > 0) {
      const packagesForDahsboard = packages.map(pack => {
        return { tracking_number: pack.tracking_number, carrier_code: pack.origin_info.carrier_code }
      }
      );
      b = packagesForDahsboard.map(pack => {
        return this.getPackageFromRapid(pack)
      });
    }
    return b;

  }

}
