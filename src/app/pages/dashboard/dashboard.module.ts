import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { PackagesModule } from 'src/app/components/packages/packages.module';
import { AddPackageModule } from 'src/app/components/add-package/add-package.module';
import { RouterModule } from '@angular/router';
import { NbLayoutModule, NbButtonModule, NbThemeModule } from '@nebular/theme';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PackagesModule,
    RouterModule
  ]
})
export class DashboardModule { }
