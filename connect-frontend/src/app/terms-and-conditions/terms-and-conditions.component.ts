import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import  { LoanDetailsComponent  } from '../loan-details/loan-details.component'

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent {
  @Output() messageEvent = new EventEmitter<string>();
  message: string = "Hello!"



  callFunctionInLoanDetails()
  {
    this.messageEvent.emit(this.message)
  }

 
}


