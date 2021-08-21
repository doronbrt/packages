import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import AlertModel from '../models/alert.model';
import { PackagesService } from '../services/packages.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  constructor(private packagesService: PackagesService) { }

  isAlert: AlertModel;
  isLoading: Observable<boolean>;

  ngOnInit(): void {
    this.packagesService.isAlert.subscribe(a => this.isAlert = a);
    this.isLoading = this.packagesService.isLoading;

  }

}
