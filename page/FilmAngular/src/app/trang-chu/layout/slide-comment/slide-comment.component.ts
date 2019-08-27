import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-comment',
  templateUrl: './slide-comment.component.html',
  styleUrls: ['./slide-comment.component.css']
})
export class SlideCommentComponent implements OnInit {
  DanhSach:any[] = [
    {HinhAnh:"./assets/img/people1.jpg", Des:"“ It was so much fun for all of my friends and family. ”", Ten:"Mike Stevens", ChucVu:"Film expert"},
    {HinhAnh:"./assets/img/people2.jpg", Des:"“ It was so much fun for all of my friends and family. ”", Ten:"Mike Stevens", ChucVu:"Film expert"},
    {HinhAnh:"./assets/img/people3.jpg", Des:"“ It was so much fun for all of my friends and family. ”", Ten:"Mike Stevens", ChucVu:"Film expert"},
    {HinhAnh:"./assets/img/people4.jpg", Des:"“ It was so much fun for all of my friends and family. ”", Ten:"Mike Stevens", ChucVu:"Film expert"},

  ]
  slideConfig_1 = {
    "slidesToShow": 3, 
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    adaptiveHeight: true,
    arrows : false,
    // <i class="fa fa-arrow-right slick_next"></i>
    responsive: [
      {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          
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
  constructor() { }

  ngOnInit() {
  }

}
