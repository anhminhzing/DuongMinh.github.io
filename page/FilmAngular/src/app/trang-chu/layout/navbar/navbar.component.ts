import { Component, OnInit, ViewChild, OnDestroy, DoCheck } from '@angular/core';


import { FormLoginService } from 'src/app/_core/service/form-login.service';
import { Subscription } from 'rxjs';
import { FlagLoginService } from 'src/app/_core/service/flag-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit, OnDestroy, DoCheck {
  DanhSachNguoiDung = [];
  SubService_DanhSach:Subscription;
  SubService_Flag_DangNhap:Subscription;
  SubService_FormDangNhap:Subscription;
  SubService_FormDangKi:Subscription;

  FormDangKi:any;
  FormDangNhap:any;

  flag_dangnhap:Boolean = false;
  // flag_dangki:Boolean = false;

  flag_shadow:Boolean = false;

  

  user:any;
  constructor(private nguoidung_service:FormLoginService, private UserService:FlagLoginService) { }

  ngOnInit() {
    this.LayDanhSach();
    this.SubService_FormDangNhap = this.UserService.Form_DangNhap.subscribe((Result:any) => {
      this.FormDangNhap = Result;
    })
    this.SubService_FormDangKi = this.UserService.Form_DangKi.subscribe((Result) => {
      this.FormDangKi = Result;
    })
    this.SubService_Flag_DangNhap = this.UserService.Flag_LogIn.subscribe((Result:any) => {
      console.log(Result);
      this.flag_dangnhap = Result.Flag;
      this.user = Result.Result;
    })
    window.addEventListener('scroll', function(e) {
      let flag_BoxShadow:Boolean = false;
      if ( window.scrollY > 0){
        flag_BoxShadow = true;
      }else{
        flag_BoxShadow = false;
      }
      return flag_BoxShadow;
    });
    if (localStorage.getItem("userLogin")){
      this.UserService.Flag_LogIn.emit({Flag:true, Result: JSON.parse(localStorage.getItem("userLogin"))});
    }
  }
  
 
  ngDoCheck(){
    if ( window.scrollY > 100) {
      this.flag_shadow = true;
    }
    else{
      this.flag_shadow = false;
    }
  }

  ngOnDestroy(){
    if(this.SubService_DanhSach)
    {
      this.SubService_DanhSach.unsubscribe();
    }
    if(this.SubService_Flag_DangNhap){
      this.SubService_Flag_DangNhap.unsubscribe();
    }
    if(this.SubService_FormDangNhap){
      this.SubService_FormDangNhap.unsubscribe();
    }
    if(this.SubService_FormDangKi){
      this.SubService_FormDangKi.unsubscribe();
    }
    
    
  }
  resetForm(){
    this.FormDangKi.reset();
    this.FormDangNhap.reset();
   
  }
  DangXuat(){
    this.flag_dangnhap = false;
    localStorage.removeItem("userLogin");
  }
  LayDanhSach(){
    this.nguoidung_service.LayDanhSachNguoiDung().subscribe(result => {
      console.log(result);
    })
  }
}
