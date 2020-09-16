import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';
import {TranslateService} from '@ngx-translate/core';

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

  constructor(private translate: TranslateService) {
    setInterval(() => {this.today2 = Date.now()}, 1000);
  }

  ngOnInit(): void {
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  today2: number = Date.now();



}
