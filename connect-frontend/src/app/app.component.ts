import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'connect';

  constructor()
  {
    localStorage.setItem("emailId", "robin@gmail.com")

  }
}
