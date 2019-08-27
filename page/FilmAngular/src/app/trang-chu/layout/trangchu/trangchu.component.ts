import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FlagLoginService } from 'src/app/_core/service/flag-login.service';
import { Router, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {

  constructor(private title:Title, private router:Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.title.setTitle("Cyber Film");
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 3000);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
    
  }

}
