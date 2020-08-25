import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value);
    /*console.log(form.invalid);
    console.log(form.value.email);
    
    console.log(form["invalid"]);
    console,log(form["vkvkldld"]);*/
  }

  onSignup(form: NgForm) {
    console.log(form);
    console.log(form.value);

  }

}
