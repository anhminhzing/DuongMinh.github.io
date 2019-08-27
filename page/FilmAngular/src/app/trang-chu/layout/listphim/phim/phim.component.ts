import { Component, OnInit, Input } from '@angular/core';
import { Phim } from 'src/app/_core/model/Phim';
import { QuanlyphimService } from 'src/app/_core/service/quanlyphim.service';


@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.css']
})
export class PhimComponent implements OnInit {
  @Input()  phim:Phim;

  constructor(private QLPhimService:QuanlyphimService) { }
  ShowTrailer(){
    this.QLPhimService.contentModalPhim.emit(this.phim);
  }

  ngOnInit() {
  }

}
