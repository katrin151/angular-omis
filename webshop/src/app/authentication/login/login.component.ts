import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignUp = true;

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.isSignUp =!this.isSignUp;

  }

}
