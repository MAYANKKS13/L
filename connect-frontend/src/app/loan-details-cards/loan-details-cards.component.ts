import { Component, OnInit, ViewChild } from '@angular/core';
import { LoanDetailsService } from '../services/loan-details.service';
import { DecimalPipe } from '@angular/common';
import { GettingTransactionsService } from '../services/getting-transactions.service';
import { async } from 'rxjs';



@Component({
  selector: 'app-loan-details-cards',
  templateUrl: './loan-details-cards.component.html',
  styleUrls: ['./loan-details-cards.component.css']
})
export class LoanDetailsCardsComponent{

  principalAmount:any;
  totalAmount:any;
  interestRate:any;
  loanTenure:any;
  paidAmount:any = 10;
  emi:any;
  paidMonths:any;

  constructor( private decimalPipe: DecimalPipe, private paymentService: GettingTransactionsService, private detailsService: LoanDetailsService, ){
      this.principalAmount = detailsService.principalAmount;
      this.interestRate = detailsService.interestRate;
      this.loanTenure = detailsService.loanTenure;

      this.emi = detailsService.emi;
      this.totalAmount = detailsService.totalAmount; 

      this.paidAmount = this.emi * this.paymentService.noOfPaidMonths;

      console.log("inside the loan details cards component")

        
      // const totalInterestPayableValue = Math.round(totalAmount - this.principalAmount); 
  }

 


 
  

 

}


