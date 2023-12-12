import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { LoanDetailsService } from './loan-details.service';


@Injectable({
  providedIn: 'root'
})
export class GettingTransactionsService implements OnInit {
  private apiUrlPayment = 'http://localhost:8096/loanApi/payment_emi_months';
  private apiUrl = 'http://localhost:8096/loanApi/createentry';
  pendingPaymentData:any;
  paidPaymentData:any;
  noOfPaidMonths:any ;
  isVisible:boolean=false;
  emailId = "example@gmail.com";


  constructor(private http: HttpClient, private datePipe: DatePipe, private loanDetails:LoanDetailsService) {   
    const emailId = localStorage.getItem("emailId");

    if(emailId)
    {
      this.emailId = emailId
    }
 
  }

  async ngOnInit() {
    // await this.loanDetails.ngOnInit();
    await this.loadData();
  }



  

  getPaymentMonths(emailId: String): Observable<number[][]> {
    const url = `${this.apiUrlPayment}/${emailId}/${this.loanDetails.loanCreationDate}`;
    return this.http.get<number[][]>(url, {});
  }


  createEmiEntry(emiEntry: any): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log("Sending Post Request");
  
    // Use toPromise() to convert the Observable into a Promise
    return this.http.post(this.apiUrl, emiEntry, { headers }).toPromise();
  }



  async loadData() {
    

    try {
      const data: any = await this.getPaymentMonths(this.emailId).toPromise();

      console.log(data);

      this.pendingPaymentData = data.missingMonths;
      this.pendingPaymentData.sort((a: any, b: any) => b[1] - a[1]);

      this.paidPaymentData = data.paidMonths;
      this.paidPaymentData.sort((a: any, b: any) => b[1][1] - a[1][1]);

      this.noOfPaidMonths = this.paidPaymentData.length;

      console.log("Pending Payment Months");
      console.log(this.pendingPaymentData);

      console.log("Paid Payment Months");
      console.log(this.paidPaymentData);


      this.isVisible = true;

      // Continue with other code that depends on the data
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }

  


 
  }

