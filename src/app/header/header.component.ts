import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) { }
  setLang(lang: string) {
    this.translate.use(lang);
    let body = document.getElementsByTagName('body')[0];
    if (lang === 'ar') {
      body.dir = "rtl";
      document.getElementById("carousel1").style.textAlign = "right";
      document.getElementById("carousel2").style.textAlign = "right";
      document.getElementById("solutionText").style.textAlign = "right";
      document.getElementById("blogs").style.textAlign = "right";
      document.getElementsByTagName("footer")[0].style.textAlign = "right";
      $("#unorderList").attr({ class: 'navbar-nav mr-auto' })
    }
    else {
      body.dir = 'ltr';
      document.getElementById("carousel1").style.textAlign = "left";
      document.getElementById("carousel2").style.textAlign = "left";
      document.getElementById("solutionText").style.textAlign = "left";
      document.getElementById("blogs").style.textAlign = "left";
      document.getElementsByTagName("footer")[0].style.textAlign = "left";
      $("#unorderList").attr({ class: 'navbar-nav ml-auto' })
    }
  }

  ngOnInit() {

  }

}
