import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carouselOptions;
  constructor() { }

  ngOnInit() {
    // this.carouselOptions = {
    //   margin: 25,
    //   nav: true,
    //   responsiveClass: true,
    //   responsive: {
    //     0: {
    //       items: 1,
    //       nav: true
    //     },
    //     600: {
    //       items: 1,
    //       nav: true
    //     },
    //     1000: {
    //       items: 1,
    //       nav: true,
    //       loop: true,
    //     }
    //   }
    // }
  }
}
