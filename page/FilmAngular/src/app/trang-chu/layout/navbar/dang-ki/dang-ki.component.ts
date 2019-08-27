import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2'
import { NguoiDung } from 'src/app/_core/model/NguoiDung';
import * as $ from 'jquery';
import { FormLoginService } from 'src/app/_core/service/form-login.service';
import { NgForm } from '@angular/forms';
import { FlagLoginService } from 'src/app/_core/service/flag-login.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-dang-ki',
  templateUrl: './dang-ki.component.html',
  styleUrls: ['./dang-ki.component.css']
})
export class DangKiComponent implements OnInit , OnDestroy{
  SubService_DangKi:Subscription;
  @ViewChild('frmDangKy') frmDangKy:NgForm;
  constructor(private nguoidung_service:FormLoginService, private FlagService:FlagLoginService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.frmDangKy.reset();
    this.FlagService.Form_DangKi.emit(this.frmDangKy);
  }
  dangKi(nguoiDung:NguoiDung){
    $(".close").trigger("click");
    nguoiDung.MaNhom = 'GP08';
    nguoiDung.MaLoaiNguoiDung = "KhachHang";
    console.log(nguoiDung);
    this.SubService_DangKi = this.nguoidung_service.DangKiNguoiDung(nguoiDung).subscribe((result) => {
      console.log(result);
      if(typeof result == 'object' )
      {
        this.spinner.show();
        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 3000);
         Swal('Thông báo','Đăng ký thành công','success');
      
      }else{
        //Đăng nhập thất bại
       Swal('Thông báo',result,'error');
      }
    })
  }
  kiemTraMatKhau(reMatKhau: string, MatKhau: string) {
    if (reMatKhau != MatKhau) {
      this.frmDangKy.control.setErrors({ 'loiMatKhau': true });
      return true;
    }
    this.frmDangKy.control.setErrors({ 'loiMatKhau': false });
    return false;
  }
  ngOnDestroy(){
    if(this.SubService_DangKi)
    {
      this.SubService_DangKi.unsubscribe();
    }
  }

}
