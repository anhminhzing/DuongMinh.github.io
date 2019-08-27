import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CaorouselComponent } from './layout/caorousel/caorousel.component';
import { FormMuaVeComponent } from './layout/form-mua-ve/form-mua-ve.component';
import { ListphimComponent } from './layout/listphim/listphim.component';
import { SlickModule } from 'ngx-slick';
import { PhimComponent } from './layout/listphim/phim/phim.component';
import { NewsComponent } from './layout/news/news.component';
import { SlideCommentComponent } from './layout/slide-comment/slide-comment.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './layout/modal/modal.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TrangchuComponent } from './layout/trangchu/trangchu.component';
// ./layout/trangchu/trangchu.component
import { Routes, RouterModule } from '@angular/router';
import { DangKiComponent } from './layout/navbar/dang-ki/dang-ki.component';
import { DangNhapComponent } from './layout/navbar/dang-nhap/dang-nhap.component';
import { ChiTietComponent } from '../trang-chi-tiet/chi-tiet/chi-tiet.component';
import { DanhSachGheComponent } from '../trang-dat-ve/danh-sach-ghe/danh-sach-ghe.component';
import { LogInGraudGuard } from '../_core/guards/log-in-graud.guard';
import { NgxSpinnerModule } from 'ngx-spinner';


// import { HttpClientModule } from '@angular/common/http';

const Router:Routes = [
  {path: "", component: LayoutComponent, children: [
    {path: "", component: TrangchuComponent},
    {path: "trangchu", component: TrangchuComponent},
    {path: "chitiet", component: ChiTietComponent},
    {path:"datve", component: DanhSachGheComponent, canActivate: [LogInGraudGuard]}
  ]}
]

@NgModule({
  declarations: [LayoutComponent, NavbarComponent, CaorouselComponent, FormMuaVeComponent, ListphimComponent, PhimComponent, NewsComponent, SlideCommentComponent, ModalComponent, FooterComponent, TrangchuComponent, DangKiComponent, DangNhapComponent],
  imports: [
    CommonModule,
    SlickModule,
    FormsModule,
    NgxSpinnerModule,
    RouterModule.forChild(Router),
    // HttpClientModule
  ],
  exports: [
    LayoutComponent, FooterComponent
  ]
})
export class TrangChuModule { }
