import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangChuModule } from './trang-chu/trang-chu.module';
import { HttpClientModule } from '@angular/common/http';
import { SlickModule } from 'ngx-slick';
import { TrangChiTietModule } from './trang-chi-tiet/trang-chi-tiet.module';
import { TrangDatVeModule } from './trang-dat-ve/trang-dat-ve.module';
import { ShortCutPipe } from './_core/pipes/short-cut.pipe';




@NgModule({
  declarations: [
    AppComponent,
    ShortCutPipe,
   
  ],
  imports: [
    BrowserModule,
    SlickModule.forRoot(),
    TrangChuModule,
    HttpClientModule,
    AppRoutingModule,
    TrangChiTietModule,
    TrangDatVeModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
