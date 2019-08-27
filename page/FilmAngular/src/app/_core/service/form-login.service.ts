import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NguoiDung } from '../model/NguoiDung';
import { userLogin } from '../model/UserLogin';


@Injectable({
  providedIn: 'root'
})
export class FormLoginService {
 
  constructor(private http:HttpClient) { }
  LayDanhSachNguoiDung(): Observable<any[]>{
    const api:string =  "http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP08";
    // return this.DanhSachPhim;
    let obServable:any = this.http.get(api);
    return obServable; // observable chứ dữ liệu server trả về
  }
  DangKiNguoiDung(nguoidung : NguoiDung): Observable<any>{
    const api:string =  "http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung";
    let header = new HttpHeaders ();
    header.append('Content-Type','application/json;charset=UTF-8');
    let observable = this.http.post(api,nguoidung, {headers:header});
    return observable;
  }
  public DangNhap(userLogin:userLogin):Observable<any>{
    let apiDangNhap:string = `http://svcy3.myclass.vn/api/quanlynguoidung/dangnhap`;
    let header = new HttpHeaders ();
    header.append('Content-Type','application/json;charset=UTF-8');
    let observable = this.http.post(apiDangNhap,userLogin, {headers:header});
    return observable;
  }
  
}
