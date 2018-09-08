import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-omega',
  templateUrl: './omega.component.html',
  styleUrls: ['./omega.component.css']
})
export class OmegaComponent implements OnInit {
  clickme = '';
  constructor() { }

  ngOnInit() {
  }

  onClickMe() {
    this.clickme = "led-green";
  }

}
