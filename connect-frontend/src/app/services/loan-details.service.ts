import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanDetailsService {

  private apiUrlLoanDetails = 'http://localhost:8090/personaldetails/loandetails';
  loanDetails:any;
  principalAmount:any = 10000;
  interestRate:any = 8.5;
  totalAmount:any = 15000;
  loanTenure:any = 12 ;
  paidAmount:any = 10;
  emi:any;
  paidMonths:any;
  emailId!:String;
  loanCreationDate!:any;

  loanTakenDate:any = new Date(2023, 10, 4);
  

  constructor(private http: HttpClient) 
  {
    
  
   }

 async testFunction()
   {
    
      this.getLoanDetails().subscribe(response => {
        this.loanDetails = response;
        this.principalAmount = this.loanDetails.principalAmount;
      this.interestRate =  this.loanDetails.interestRate;
  
  
      this.emi = Math.round(this.CalculateEmi());
        this.totalAmount = Math.round(this.loanTenure * this.emi); // Replace with your actual data
        console.log("The EMI is:" + this.emi)
        console.log("First statement")
      console.log(this.loanDetails)
      return this.loanDetails;
      })
      
     
   }
    


   

   

  // This function should fetch the loan details from vismay's server
  getLoanDetails(): Observable<number[][]> {
    const emailId = localStorage.getItem("emailId");
      console.log("At the point of getting email, ", emailId)
      if(emailId)
      {
        this.emailId = emailId
      }

    console.log("Email is", emailId);
    const url = `${this.apiUrlLoanDetails}/${emailId}`;
    return this.http.get<number[][]>(url, {});
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
}
