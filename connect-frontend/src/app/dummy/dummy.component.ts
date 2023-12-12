import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GettingTransactionsService } from '../services/getting-transactions.service';
import { LoanDetailsService } from '../services/loan-details.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent {

  currentDate:any;
  emailIdFromRoute!:string | null;
  payingDate!:string | null;

  constructor(private router: Router, private paymentService: GettingTransactionsService, 
    private detailsService: LoanDetailsService, private datePipe:DatePipe, private route: ActivatedRoute)
  {
    this.route.queryParamMap.subscribe(queryParams => {
      // Access query parameters here
      this.emailIdFromRoute = queryParams.get('emailIdFromRoute');
      this.payingDate = queryParams.get('payingDate');
  
      // Use the values as needed
      console.log('emailIdFromRoute:', this.emailIdFromRoute);
      console.log('payingDate:', this.payingDate);
    });

    if (this.payingDate !== null) {
      const payingDate = new Date(this.payingDate);
      
      // Use the DatePipe to format the date as "01/10/2023"
      this.payingDate = this.datePipe.transform(payingDate, 'dd/MM/yyyy');
      
      // Use the DatePipe to format the date as "01/10/2023"
      this.addEmiEntry();
    } else {
      console.error('payingDate is null');
    }
    
    // Use the DatePipe to format the date as "01/10/2023"

  }

  async addEmiEntry() {
    try {
      // Call the createEmiEntry function and wait for its completion
      await this.paymentService.createEmiEntry({
        "emailId": `${this.emailIdFromRoute}`,
        "monthEmiDate": this.payingDate,    // this.currentDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
        "paymentDoneDate": `${this.datePipe.transform(new Date(), 'dd/MM/yyyy')}`,
        "amount": `${this.detailsService.emi}` 
      });
      
      // The HTTP request has completed successfully, now navigate
      console.log("Entry added");
      this.router.navigate(['loan-details']);
    } catch (error) {
      // Handle any errors that may occur during the HTTP request
      console.error('Error adding entry:', error);
    }
  }

}
