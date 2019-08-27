import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuanlyphimService {
  @Output() contentModalPhim = new EventEmitter;
  @Output() ChiTietPhim = new EventEmitter;

  constructor(private http : HttpClient) { }

  LayDanhSachPhim() :Observable<any[]> {
    const api:string = "http://svcy2.myclass.vn/api/quanlyphim/laydanhsachphim?manhom=GP01";
    let obServable:any = this.http.get(api);
    return obServable
  }

  LayChiTietPhim(maphim:string) :Observable<any[]>{
    const api:string = `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maphim}`;
    let obServable:any = this.http.get(api);
    return obServable;
  }
  LayPhongVe(maprap:string) :Observable<any[]>{
    const api:string = `http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maprap}`;
    let obServable:any = this.http.get(api);
    return obServable;
  }
  DatVe(ve:any){
    const api:string = `http://svcy2.myclass.vn/api/QuanLyDatVe/DatVe`;
    let header = new HttpHeaders ();
    header.append('Content-Type','application/json;charset=UTF-8');
    let observable:any = this.http.post(api,ve, {headers:header});
    return observable;
  }
  // LayDanhSachPhim(): Observable<any[]>{
  //   //Lấy danh sách phim từ server;
  //   const api:string = `http://svcy2.myclass.vn/api/quanlyphim/laydanhsachphim?manhom=GP02`;
  //   let obServable:any = this.http.get(api);
  //   return obServable; //observable chứa dữ liệu từ server trả về
  // }
}
