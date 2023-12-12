import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GettingTransactionsService } from '../services/getting-transactions.service';
import { LoanDetailsService } from '../services/loan-details.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit{
  message!:string;
  showTermsAndConditions:boolean = false;
  showComponent:boolean = false;
  principalAmount!:number;
  interestRate:number = 8.5;
  interestAmount!:number;
  emi!:number;
  loanTenure!:number;
  totalAmount:any;
  dataDetails:any;
  data:any;
  products:any

  constructor(private paymentService:GettingTransactionsService, private loanDetails:LoanDetailsService,
     private activatedRoute:ActivatedRoute, private datePipe: DatePipe)
  { 
    
  }

  async ngOnInit() {
    
    this.activatedRoute.data.subscribe((response: any) => {
      console.log('PRODUCT FETCHING', response);
      this.products = response.products;
      console.log('PRODUCT FETCHED', this.products);

      this.principalAmount = this.products.amount;
      this.loanTenure = this.products.tenure
      this.loanDetails.loanCreationDate = this.datePipe.transform(this.products.createdTime, 'dd-MM-yyyy');

      this.emi = Math.round(this.CalculateEmi());
      this.totalAmount = Math.round(this.loanTenure * this.emi); // Replace with your actual data
      this.interestAmount = this.totalAmount-this.principalAmount
        
      console.log("The EMI is:" + this.emi)
        console.log("First statement")

        this.loanDetails.principalAmount =  this.products.amount;
        this.loanDetails.totalAmount = this.totalAmount
        this.loanDetails.emi = this.emi;



    });
    
    await this.paymentService.ngOnInit()
    console.log("After await in loan details component");
    this.showComponent = true;

    

  }

  async getData()
  {
    this.loanDetails.getLoanDetails().subscribe(response => {
      this.dataDetails = response;
      this.principalAmount = this.dataDetails.principalAmount;
    this.interestRate =  this.dataDetails.interestRate;
    this.interestAmount =  this.dataDetails.totalAmount -  this.dataDetails.principalAmount;


    this.emi = Math.round(this.CalculateEmi());
      console.log("New EMI is", this.emi)
      this.totalAmount = Math.round(this.loanTenure * this.emi); // Replace with your actual data
      console.log("The EMI is:" + this.emi)
    });
  }
  

  CalculateEmi(): number{
    let interest =  this.interestRate / 12 / 100
    let emi =
      this.principalAmount *
      interest *
      (Math.pow(1 + interest, this.loanTenure) /
        (Math.pow(1 + interest, this.loanTenure) - 1));
  
    return emi;
  }


  toggle()
  {
    this.showTermsAndConditions = !this.showTermsAndConditions

  }

  receiveMessage($event: any) {
    this.showTermsAndConditions= false;

    console.log("message")
  }

}
