import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PackagesService } from 'src/app/services/packages.service';
import { map } from 'rxjs/operators';
import CarrierModel from 'src/app/models/carrier.model';
import PackageRequestModel from 'src/app/models/package-request.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import PackageModel from 'src/app/models/package.model';
import { Observable } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.scss']
})
export class AddPackageComponent implements OnInit {

  constructor(private fb: FormBuilder, private packagesService: PackagesService) { }

  form: FormGroup;

  carriers: CarrierModel[];

  loading: Observable<boolean>;

  package: PackageModel[];

  isAlert = false;

  isSucceed = false;

  initForm() {
    return this.fb.group({
      trackNum: ['UZ0146806606Y', Validators.required],
      carrier: ['', Validators.required]
    });
  }

  getPackageDetails() {
    this.packagesService.isLoadingSub.next(true);
    const pack: PackageRequestModel = { carrier_code: this.carrier, tracking_number: this.trackNum };
    this.packagesService.getPackageFromRapid(pack)
      .pipe(untilDestroyed(this), map(a => a.data.items))
      .subscribe(a => {
        console.log('package details ', a);
        this.package = a;
        this.packagesService.isLoadingSub.next(false);
      }, (err) => { console.log(err); this.packagesService.isLoadingSub.next(false); });
  }

  get trackNum() {
    return this.form.get('trackNum').value;
  }
  get carrier() {
    return this.form.get('carrier').value.code;
  }
  sortCarriers(a: CarrierModel, b: CarrierModel) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  }

  setAlert(alert: boolean) {
    this.isAlert = alert
  }

  ngOnInit(): void {
    this.loading = this.packagesService.isLoading;
    this.packagesService.carriers.pipe(untilDestroyed(this)).subscribe(c => {
      this.carriers = c;
      this.form = this.initForm();
    });
  }

}
