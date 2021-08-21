import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagesComponent } from './packages.component';
import { PackageModule } from '../package/package.module';
import { NbButtonModule } from '@nebular/theme';
import { LoaderModule } from 'src/app/shared/loader/loader.module';



@NgModule({
  declarations: [
    PackagesComponent
  ],
  imports: [
    CommonModule,
    PackageModule,
    NbButtonModule,
  ],
  exports: [PackagesComponent]
})
export class PackagesModule { }
