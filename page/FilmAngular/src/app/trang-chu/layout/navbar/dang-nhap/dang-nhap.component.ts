import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { userLogin } from 'src/app/_core/model/UserLogin';
import { Subscription } from 'rxjs';
import { FormLoginService } from 'src/app/_core/service/form-login.service';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import { FlagLoginService } from 'src/app/_core/service/flag-login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit, OnDestroy {
  SubService_DanhNhap:Subscription;
  @ViewChild('frmDangNhap') frmDangNhap:NgForm;
  constructor(private nguoidung_service:FormLoginService, private FlagService:FlagLoginService) { }
  flag_dangnhap:boolean = false
  ngOnInit() {
    this.frmDangNhap.reset();
    this.FlagService.Form_DangNhap.emit(this.frmDangNhap)
  }

  ngOnDestroy(){
    if(this.SubService_DanhNhap)
    {
      this.SubService_DanhNhap.unsubscribe();
    }
  }
  DangNhap(userLogin:userLogin)
  {
    console.log(userLogin)
    this.SubService_DanhNhap = this.nguoidung_service.DangNhap(userLogin)
    .subscribe((result)=>{
        if(typeof result == 'object')
        {
          userLogin.accessToken = result.accessToken;
          localStorage.setItem('userLogin',JSON.stringify(userLogin));
          localStorage.setItem('flag_userLogin',JSON.stringify(true));
          this.flag_dangnhap == true;
          Swal('Thông báo','Đăng nhập thành công','success');
          $(".close").trigger("click");
          this.FlagService.Flag_LogIn.emit({Flag: true, Result:result});
         
        }else{
          this.FlagService.Flag_LogIn.emit({Flag: false, Result:result});
          Swal('Thông báo','Đăng nhập thất bại','error');
        }
        console.log(result);
    })
  }
}
