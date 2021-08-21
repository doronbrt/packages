import { Component, Input, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import AlertModel from 'src/app/models/alert.model';
import PackageModel from 'src/app/models/package.model';
import { PackagesService } from 'src/app/services/packages.service';

@UntilDestroy()
@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {

  constructor(private packagesService: PackagesService) { }

  @Input() package: PackageModel;
  @Input() isEnableToAdd = false;
  isAlert: AlertModel;

  addPackageToTrackingList(pack: PackageModel) {
    this.packagesService.addPackage(pack).pipe(untilDestroyed(this)).subscribe(a => console.log(a),
      () => { this.packagesService.isAlertSub.next({ isOpen: true, isSucceed: false, text: 'An error occured' }) },
      () => { this.packagesService.isAlertSub.next({ isOpen: true, isSucceed: true, text: 'Package added to your dashboard' }) });
  }
  deletePackageFromTrackingList() {
    this.packagesService.deletePackage(this.package).pipe(untilDestroyed(this)).subscribe(a => console.log('deleted ', a),
      () => { this.packagesService.isAlertSub.next({ isOpen: true, isSucceed: false, text: 'An error occured' }) },
      () => { this.packagesService.isAlertSub.next({ isOpen: true, isSucceed: false, text: 'Removed Succefully' }) }
    );
  }

  ngOnInit(): void {
    this.packagesService.isAlert.subscribe(a => this.isAlert = a);
  }

}
