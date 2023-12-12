import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-loan-application-form',
  templateUrl: './loan-application-form.component.html',
  styleUrls: ['./loan-application-form.component.css']
})
export class LoanApplicationFormComponent {
  formData: any = {};
  loanAppForm!: NgForm;

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar ) {}

  @ViewChild('loanAppForm') set formReference(form: NgForm) {
    this.loanAppForm = form;
  }

  submitLoanApplication() {
    if (this.isFormValid()) {
      this.http.post<LoanApplication>('http://localhost:8080/loanApplications', this.formData)
        .subscribe((response: LoanApplication) => {
          console.log('Loan application created:', response);
          this.formData = {};
          this.loanAppForm.resetForm();
          this.openSnackBarWithAction();
          // this.router.navigate(['/document-upload']);
        });
    } else {
      console.log('Form is invalid. Please correct the errors.');
    }
  }
  openSnackBarWithAction() {
    const snackBarRef = this.snackBar.open('Congratulations!! You are one Step Away', 'Pay Fee', {
      duration: 50000, // Duration in milliseconds
    });
  
    // Add a click handler for the action button
    snackBarRef.onAction().subscribe(() => {
      // Handle the "Pay Convenience Fee" button click here
      // For example, you can navigate to the payment component
      // this.router.navigate(['/payment']);
      console.log('Pay Convenience Fee button clicked');
    });
  }
  isFormValid(): boolean {
    return (
      this.isBankNameValid() &&
      this.isAccountNumberValid() &&
      this.isIFSCCodeValid() &&
      this.isOwnerNameValid() &&
      this.isAadharCardValid() &&
      this.isPanCardValid()
    );
  }

  isBankNameValid(): boolean {
    return !!this.formData.bankname;
  }

  isAccountNumberValid(): boolean {
    const accountNumber = this.formData.accountnumber;
    return /^[0-9]{10,}$/.test(accountNumber);
  }

  isIFSCCodeValid(): boolean {
    const ifscCode = this.formData.ifsccode;
    return /^[A-Za-z0-9]{11}$/.test(ifscCode);
  }

  isOwnerNameValid(): boolean {
    return !!this.formData.ownername;
  }

  isAadharCardValid(): boolean {
    const aadharCard = this.formData.aadharcard;
    return /^[0-9]{12}$/.test(aadharCard);
  }

  isPanCardValid(): boolean {
    const panCard = this.formData.pancard;
    return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panCard);
  }

}
  interface LoanApplication {
    id: string;
    bankname: string;
    accountnumber: string;
    ifsccode: string;
    ownername: string;
    aadharcard: string;
    pancard: string;
  }
