import { Component, Input, OnInit } from '@angular/core';
import MenuItemModel from 'src/app/models/menu-item.model';

@Component({
  selector: 'app-menu-tab-item',
  templateUrl: './menu-tab-item.component.html',
  styleUrls: ['./menu-tab-item.component.scss']
})
export class MenuTabItemComponent implements OnInit {

  @Input() menuItem: MenuItemModel;

  constructor() { }

  ngOnInit(): void {
  }

}
