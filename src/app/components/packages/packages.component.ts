import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import carrierModel from 'src/app/models/carrier.model';
import PackageModel from 'src/app/models/package.model';
import { PackagesService } from 'src/app/services/packages.service';

@UntilDestroy()
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  constructor(private packagesService: PackagesService) {
    this.packagesService.isLoadingSub.next(true);
  }

  packages: PackageModel[];

  carriers: carrierModel[];

  packnew: PackageModel[] = [];

  ngOnInit(): void {
    this.packagesService.packages.pipe(untilDestroyed(this)).subscribe(a => {
      this.packages = a;
      console.log('this.packages ', this.packages);
      // if (a)
      //   this.packagesService.getPackgesFromApi(a).forEach(b => b.subscribe(c => this.packnew.push(c)));
    }, err => {
      console.log('error ', err);
    });
    // console.log('this.packnew ', this.packnew);

  }

}
