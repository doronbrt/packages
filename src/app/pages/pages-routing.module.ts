import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPackageComponent } from '../components/add-package/add-package.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      { path: 'addPackage', component: AddPackageComponent },
      { path: 'login', component: LoginPageComponent },
      {
        path: '', pathMatch: 'full', redirectTo: 'dashboard'
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class PagesRoutingModule { }
