import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent {
  
  constructor(private router:Router)
  {

  }

   onClick()
   {
      this.router.navigate(["/login"]);
   }


}
