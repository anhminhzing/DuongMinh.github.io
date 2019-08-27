import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatVeComponent } from './dat-ve/dat-ve.component';
import { GheComponent } from './ghe/ghe.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';

@NgModule({
  declarations: [DatVeComponent, GheComponent, DanhSachGheComponent],
  imports: [
    CommonModule
  ],
  exports:[
    DanhSachGheComponent, GheComponent
  ]
})
export class TrangDatVeModule { }
