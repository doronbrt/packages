import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { PackageModule } from '../package/package.module';
import { AddPackageComponent } from './add-package.component';



@NgModule({
  declarations: [
    AddPackageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    LoaderModule,
    PackageModule
  ],
  exports: [AddPackageComponent]
})
export class AddPackageModule { }
