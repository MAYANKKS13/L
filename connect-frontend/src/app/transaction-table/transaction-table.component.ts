import { Component } from '@angular/core';
import { GettingTransactionsService } from '../services/getting-transactions.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { LoanDetailsService } from '../services/loan-details.service';

interface PaymentData {
  paidMonths: number[][];
  missingMonths: number[][];
}

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})
export class TransactionTableComponent {
  pendingPaymentData:any;
  paidPaymentData:any;
  emi:any;
  // formattedDates: string[] = [];

  
  constructor(private paymentService: GettingTransactionsService,private detailsService: LoanDetailsService, private datePipe: DatePipe, private router: Router) {
    this.pendingPaymentData = paymentService.pendingPaymentData;
    this.paidPaymentData = paymentService.paidPaymentData;

    console.log("Paid data:")
    console.log(this.paidPaymentData);

    
    this.pendingPaymentData = this.formatDates(this.pendingPaymentData);
    this.paidPaymentData = this.formatDatesWithDay(this.paidPaymentData);
    console.log("pend")
    console.log(this.pendingPaymentData)
    this.emi = detailsService.emi


   }




  paymentPage(payingMonth:String): void{
    this.router.navigate(['/emi-payment', this.paymentService.emailId,payingMonth]);
  }


  formatDates(monthsData:number[][]) {
    let formattedDates = [];

    for (const dateArray of monthsData) {
      const year = dateArray[0];
      const month = dateArray[1];
      const formattedDate = this.datePipe.transform(
        new Date(year, month - 1, 1),
        'MMMM yyyy'
      );
      if (formattedDate !== null) {
        formattedDates.push(formattedDate);
      }
    }

    return formattedDates
  }



  formatDatesWithDay(monthsData:number[][][]) {
    let formattedDates = [];
    
    for (const dateArray of monthsData) {

      let year = dateArray[0][0];
      let month = dateArray[0][1];
      let day = dateArray[0][2];
      const formattedDate = this.datePipe.transform(
        new Date(year, month - 1, day),
        'EE, dd MMMM yyyy'
      );

      year = dateArray[1][0];
      month = dateArray[1][1];
      day = dateArray[1][2];

      const formattedEMIDate = this.datePipe.transform(
        new Date(year, month - 1, day),
        '-MMMM yyyy'
      );
      if (formattedDate !== null) {
        formattedDates.push(formattedDate + formattedEMIDate);
      }
    }

    return formattedDates
  }


}


