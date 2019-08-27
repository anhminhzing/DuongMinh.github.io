import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path:'',loadChildren: './trang-chu/trang-chu.module#TrangChuModule'},
  {path:'trangchu',loadChildren: './trang-chu/trang-chu.module#TrangChuModule'},
  {path:'chitiet',loadChildren: './trang-chi-tiet/trang-chi-tiet.module#TrangChiTietModule'},
  {path:'datve', loadChildren: './trang-dat-ve/trang-dat-ve.module#TrangDatVeModule'},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
