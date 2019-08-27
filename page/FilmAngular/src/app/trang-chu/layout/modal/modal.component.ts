import { Component, OnInit, OnDestroy } from '@angular/core';
import { Phim } from 'src/app/_core/model/Phim';
import { QuanlyphimService } from 'src/app/_core/service/quanlyphim.service';
import { Subscription } from 'rxjs';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  
  public Phim:any = {};
  public url:string = "";
  subService:Subscription;
  urlCache = new Map<string, SafeResourceUrl>();
  
  // subPhim:Subscription;
  constructor(private QLPhimService:QuanlyphimService, private domSanitizer: DomSanitizer) {
   
  }
  // public Url_phim: string;
  ngOnInit() {
    this.subService = this.QLPhimService.contentModalPhim.subscribe((phim:any) => {
      this.Phim = phim;
      this.url = this.getId(this.Phim.Trailer)
      // this.getIframeYouTubeUrl(this.getId(this.Phim.Trailer)) ;
      console.log(this.url);
      
    })
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
  ngOnDestroy() {
    if(this.subService){
      this.subService.unsubscribe();
    }
  }

}
