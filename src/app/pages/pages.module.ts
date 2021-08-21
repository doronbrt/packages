import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../theme/theme.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginPageModule } from './login-page/login-page.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    ThemeModule,
    DashboardModule,
    LoginPageModule
  ],
})
export class PagesModule { }
