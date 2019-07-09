import { Component } from '@angular/core';
import { TranslateService } from './translate.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mastia';
  constructor(private translate: TranslateService) {}

  setLang(lang: string) {
    this.translate.use(lang);
console.log(lang);
// var bdy = document.getElementById("#body");
var body = document.getElementsByTagName('body')[0];
if( lang === "ar") {
body.dir="rtl";
body.classList.add("text-right");
// body.setAttribute("class","text-right");

    var search = document.getElementsByClassName('fa-search')[0];
    search.setAttribute('style', "right: 100%; left: 7%");

    var nav = document.getElementsByClassName('collapse navbar-collapse')[0];
nav.classList.remove("justify-content-center");
nav.classList.add("justify-content-end");

var navbar = document.getElementsByClassName('navbar-nav')[0];
navbar.classList.remove('ml-auto');
navbar.classList.add('mr-auto');

var footer = document.getElementsByTagName('footer')[0];
footer.classList.add('text-right');

var projects = document.getElementsByClassName('projects')[0];
projects.classList.add("text-right");

var news = document.getElementsByClassName("new")[0];
news.classList.add('text-right');

var linkedDir1 = document.getElementsByClassName("link-dir")[0];
linkedDir1.classList.remove('float-right');
linkedDir1.classList.add('float-left');

var linkedDir2 = document.getElementsByClassName("link-dir")[1];
linkedDir2.classList.remove('float-right');
linkedDir2.classList.add('float-left');

}
else {
  body.dir="ltr";
  // document.head.removeChild(script);
}

    }
    
}
