import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /*today = new Date();
  todaysDataTime = '';
  constructor() {
    this.todaysDataTime = formatDate(this.today, 
      'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
   }*/

  ngOnInit(): void {
  }

  today2: number = Date.now();

constructor() {
    setInterval(() => {this.today2 = Date.now()}, 1000);
}

}
