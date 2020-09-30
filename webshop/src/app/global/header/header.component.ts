import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn = false;

  /*today = new Date();
  todaysDataTime = '';
  constructor() {
    this.todaysDataTime = formatDate(this.today, 
      'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
   }*/

  constructor(private translate: TranslateService,
    private authService: AuthService) {
    setInterval(() => {this.today2 = Date.now()}, 1000);
  }

  ngOnInit(): void {
    this.authService.user.subscribe(userChanged => {
      this.loggedIn = !!userChanged;
      console.log(userChanged);
      console.log(!userChanged);
      console.log(!!userChanged);
    })
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
   onLogout() {
     this.authService.logout();

   }
  today2: number = Date.now();



}
