import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTabItemComponent } from './menu-tab-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuTabItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MenuTabItemComponent]
})
export class MenuTabItemModule { }
