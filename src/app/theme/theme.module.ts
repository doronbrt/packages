import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule } from '../shared/alert/alert.module';
import { LoaderModule } from '../shared/loader/loader.module';
import { MenuTabItemModule } from './menu-tab-item/menu-tab-item.module';
import { ThemeComponent } from './theme.component';

@NgModule({
  declarations: [
    ThemeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenuTabItemModule,
    LoaderModule,
    AlertModule
  ],
  exports: [ThemeComponent]
})
export class ThemeModule { }
