import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { QuanlyphimService } from 'src/app/_core/service/quanlyphim.service';
import { Phim } from 'src/app/_core/model/Phim';
import { Title, SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-chi-tiet',
  templateUrl: './chi-tiet.component.html',
  styleUrls: ['./chi-tiet.component.css']
})
export class ChiTietComponent implements OnInit {

  constructor(private atvRoute: ActivatedRoute, private PhimService: QuanlyphimService, private title:Title, private domSanitizer: DomSanitizer, private router:Router) { }
  subParam:Subscription;
  subService:Subscription;
  phim: Phim = new Phim();
  public url:string = "";
  flag_shadow:boolean = false;
  urlCache = new Map<string, SafeResourceUrl>();
  
  ngOnInit() {
    //   this.router.events.subscribe((evt) => {
    //     if (!(evt instanceof NavigationEnd)) {
    //         return;
    //     }
    //     window.scrollTo(0, 0)
    // });
    window.scrollTo(0, 0);
    this.subParam = this.atvRoute.queryParams.subscribe((thamso: any) => {
      console.log(thamso);
      this.subService = this.LayChiTietPhim(thamso.MaPhim); //Lấy giá trị tham số gọi service load nội dung phim
      this.title.setTitle(thamso.TenPhim);
    });
  }
  LayChiTietPhim(maPhim: string) {
    return this.PhimService.LayChiTietPhim(maPhim).subscribe((ketqua:any) => {
      
        if(typeof (ketqua) === 'object')
        {
          this.phim = ketqua;
          console.log(this.phim);
          this.url = this.getId(this.phim.Trailer);
          
        }else {
          this.PhimService = ketqua;
        }
    }, (error) => {
      console.log(error);
    });
  }
  getId(url) {
    let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
  }
  getIframeYouTubeUrl(videoId: string): SafeResourceUrl {
    let url = this.urlCache.get(videoId);
    if (!url) {
      url = this.domSanitizer.bypassSecurityTrustResourceUrl(
        "https://www.youtube.com/embed/" + videoId);;
      this.urlCache.set(videoId, url);
    }
    return url;
  }
  ngDoCheck(){
    if ( window.scrollY > 100) {
      this.flag_shadow = true;
    }
    else{
      this.flag_shadow = false;
    }
  }
  getUrl_Img()
  {
    return `url('${this.phim.HinhAnh}')`;
  }
  DatVe(){
    this.PhimService.ChiTietPhim.emit(this.phim);
  }
}
