import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiTietComponent } from './chi-tiet/chi-tiet.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [ChiTietComponent],
  imports: [
    CommonModule,RouterModule
  
  ],
  exports:[
    ChiTietComponent
  ]
})
export class TrangChiTietModule { }
