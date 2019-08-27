import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { GheComponent } from '../ghe/ghe.component';
import { QuanlyphimService } from 'src/app/_core/service/quanlyphim.service';
import { Phim } from 'src/app/_core/model/Phim';
import { Subscription } from 'rxjs';
import { ActivatedRoute,  Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.css']
})
export class DanhSachGheComponent implements OnInit {
  phim:Phim  = new Phim;
  DanhSachGhe:any[];
  subParam:Subscription;
  MaPhim:string;
  DanhSachGheChon:any =[];
  TongTien:number = 0;
  flag_button:Boolean = false;
  MaLichChieu:string;
  TenRap:string = "";
  LichChieu:string ="";
  user:any;
 
  constructor(private MovieService:QuanlyphimService, private atvRoute:ActivatedRoute, private route:Router) { }
  @ViewChildren(GheComponent) dsTagGhe:QueryList<GheComponent>; 
  Show(){
    console.log(this.DanhSachGhe);
    // console.log(this.DanhSachGhe[0].SoGhe);
  }
  DatGhe(Ghe:any){
    let flag_ghe = this.DanhSachGheChon.find(ghe => ghe.MaGhe == Ghe.MaGhe);
    // console.log(flag_ghe);
    if(!flag_ghe){
     
      this.DanhSachGheChon.push(Ghe);
    }else{
      for (let i = 0; i < this.DanhSachGheChon.length; i++){
        if (this.DanhSachGheChon[i].MaGhe == Ghe.MaGhe){
          this.DanhSachGheChon.splice(i, 1);
        }
      }
    }
    if (this.DanhSachGheChon.length > 0){
      this.flag_button = true;
    }
    else{
      this.flag_button = false;
    }
    this.TinhTongTien();
  }
 
  HuyGhe(Ghe:any){
    this.DatGhe(Ghe)
    this.dsTagGhe.forEach((sp:GheComponent) => {
      if (sp.Ghe.MaGhe == Ghe.MaGhe){
        sp.DatVe();
      }
    })
  }
  TinhTongTien(){
    this.TongTien = 0;
    this.DanhSachGheChon.map((sp) => {
      this.TongTien += sp.GiaVe;
    })
  }
  DatVe(){
    let DanhSachGheSubmit:any[] = [];
    
    
    for (let i = 0; i < this.DanhSachGheChon.length; i++){
      let ghe_1 = {
        MaGhe:this.DanhSachGheChon[i].MaGhe,
        GiaVe: this.DanhSachGheChon[i].GiaVe
      } 
      DanhSachGheSubmit.push(ghe_1)
    }
    this.MovieService.DatVe({MaLichChieu:this.MaLichChieu,TaiKhoanNguoiDung:this.user.TaiKhoan, DanhSachVe: DanhSachGheSubmit }).subscribe((result) => {
      Swal("Thông báo", result, "success");
      this.route.navigate(["/trangchu"]);
    })
   
    
  }
  ngOnInit() {
    this.subParam = this.atvRoute.queryParams.subscribe((thamso: any) => {
      this.MaPhim = thamso.MaPhim;
      this.MaLichChieu = thamso.MaLichChieu;
      this.LichChieu = thamso.LichChieu;
      this.TenRap = thamso.TenRap;
    });
    this.MovieService.LayChiTietPhim(this.MaPhim).subscribe((result:any) => {
      this.phim = result;
      console.log(this.phim);
    })
    this.MovieService.LayPhongVe(this.MaLichChieu).subscribe((result:any) => {
      console.log(result);
      this.DanhSachGhe = result.DanhSachGhe;
    })
    this.user = JSON.parse(localStorage.getItem("userLogin"));
    console.log(this.user);
  }
}
