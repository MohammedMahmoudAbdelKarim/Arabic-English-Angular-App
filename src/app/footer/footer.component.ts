import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  callback: FormGroup;
  ngOnInit() {
    this.callback = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      contact: new FormControl("", Validators.required)
    })
  }
  request(form) {
    console.log(form);
  }

}