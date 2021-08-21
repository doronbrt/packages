import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';
import { StringLengthPipe } from 'src/app/pipes/string-length.pipe';
import { AlertModule } from 'src/app/shared/alert/alert.module';
import { PackageComponent } from './package.component';



@NgModule({
  declarations: [
    PackageComponent, StringLengthPipe
  ],
  imports: [
    CommonModule,
    NbCardModule,
    FormsModule,
    AlertModule,
  ],
  exports: [PackageComponent]
})
export class PackageModule { }
