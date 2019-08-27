import { Component, OnInit, ElementRef, Renderer2, Input, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {

  @Input() Ghe:any = {};
  TrangThai = false;
  @Output() output_Ghe = new EventEmitter();
  
  @ViewChild("TagGhe") TagGhe:ElementRef;
 
  DatVe(){
    //Cách mình làm
    // if(this.TrangThai == false){
    //   this.Render.setStyle(this.TagGhe.nativeElement, "background-color", "blue");
    //   this.TrangThai = !this.TrangThai ;
    // }else{.
    //   this.Render.removeStyle(this.TagGhe.nativeElement, "background-color");
    //   this.TrangThai = !this.TrangThai;
    // }
    
    //Sửa xài ngClass cho dễ
    this.TrangThai = !this.TrangThai;


    // console.log(this.TrangThai);
  }

  Output_DatGhe(){
    this.output_Ghe.emit(this.Ghe);
    
  }
  constructor(private ele:ElementRef, private Render:Renderer2) { }

  ngOnInit() {
  }

}
