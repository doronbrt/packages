import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import AlertModel from 'src/app/models/alert.model';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(private packagesService: PackagesService) { }

  alert: AlertModel;

  ngOnInit(): void {
    this.packagesService.isAlert.subscribe(a => this.alert = a);
  }

  closeAlert() {
    this.packagesService.isAlertSub.next({ isOpen: false, isSucceed: false })
  }

}
