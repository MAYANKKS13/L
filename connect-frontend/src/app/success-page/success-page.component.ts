import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent {
  constructor(private router:Router){}
  continueToBankingDetails(): void {
    // Add your navigation logic here, e.g., navigate to the banking details page
    // You'll need to import Router and inject it into the constructor for navigation
   this.router.navigate(['/loan-application']);
  }
}
