import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  tabs = [
    {
      title: 'Route tab #1',
      route: '/pages/dashboard',
      // icon: 'home',
      responsive: true, // hide title before `route-tabs-icon-only-max-width` value
    },
    {
      title: 'Route tab #2',
      route: '/pages/addPackage',

    }
  ];
}
