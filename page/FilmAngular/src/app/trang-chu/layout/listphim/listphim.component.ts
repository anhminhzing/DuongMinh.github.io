import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { QuanlyphimService } from 'src/app/_core/service/quanlyphim.service';
import { Subscription } from 'rxjs';
import { Phim } from 'src/app/_core/model/Phim';

@Component({
  selector: 'app-listphim',
  templateUrl: './listphim.component.html',
  styleUrls: ['./listphim.component.css']
})

export class ListphimComponent implements OnInit, OnDestroy {
  
  // @ViewChild("video") Video:ElementRef;
  constructor(private phimService:QuanlyphimService, private ele:ElementRef, private Render:Renderer2) { }
  DanhSachPhim :Phim[];
  phim:Phim;
  phim_sub:Subscription;
  ngOnInit() {
    this.phim_sub = this.phimService.LayDanhSachPhim().subscribe((result) => {
      this.DanhSachPhim = result;
      console.log(this.DanhSachPhim);
     
    })
   
  }
 
  
  
  slideConfig_1 = {
    "slidesToShow": 4, 
    "slidesToScroll": 4,
    "dots": false,
    "infinite": false,
    adaptiveHeight: true,
    arrows : true,
    // <i class="fa fa-arrow-right slick_next"></i>
    nextArrow: '<i class="fa fa-arrow-right slick_next"></i>',
    prevArrow: '<i class="fa fa-arrow-left slick_prev"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
      }
    ]
  };
  slideConfig_2 = {"slidesToShow": 4, 
  "slidesToScroll": 4,
  "dots": false,
  "infinite": false,
  adaptiveHeight: true,
  arrows: true,
  nextArrow: '<i class="fa fa-arrow-right slick_next"></i>',
  prevArrow: '<i class="fa fa-arrow-left slick_prev"></i>',
  responsive: [
    {
    breakpoint: 1024,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        "dots": false,
        arrows: false,

    }
    },
    {
    breakpoint: 768,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        "dots": false,
        arrows: false,
    }
    },
    {
    breakpoint: 480,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        "dots": false,
        arrows: false,
    }
    }
   
  ]
 
};
  // ShowModalYoutube(trailer:string){
  //   this.Render.setAttribute(this.Video.nativeElement, "data-trailer", trailer);
  //   console.log(trailer);
  // }
  ShowModal(){
    console.log("AAA");
  }
  
  ngOnDestroy(){
    this.phim_sub.unsubscribe();
  }

}
