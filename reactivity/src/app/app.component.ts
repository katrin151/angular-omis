import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactivity';
  muutuja;

  likeMuutuja = false;

  onKlikk() {
    this.likeMuutuja = !this.likeMuutuja;
  }
}
