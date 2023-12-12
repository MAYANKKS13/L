import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent {
  detailsForm: NgForm | undefined;
  formData: any = {
    firstName:'',
    lastName:'',
    emailId:'',
    phoneNumber:'',
    displayName:'',
    address: {
      street: '',
      village: '',
      zipCode: '',
      district: '',
      state: '',
      country: ''
    },
    loanDetails:{
      amount:null,
      tenure:null
    }
  };
  borrowerDetailsToUpdate={
    firstName:'',
    lastName:'',
    emailId:'',
    phoneNumber:'',
    displayName:'',
    address: {
      street: '',
      village: '',
      zipCode: '',
      district: '',
      state: '',
      country: ''
    },
    loanDetails:{
      amount:0,
      tenure:0
    }

  }
  selectedFileName: string = '';
  profilePictureUrl: string = ''; // URL to display the profile picture
  detailsSaved: boolean = false;
  formSubmitted: boolean = false;
  maxDate: Date;


  constructor(private http: HttpClient,
              private _snackBar:MatSnackBar,
              private router:Router
            ) {
    const today = new Date();
    this.maxDate = new Date(today.getFullYear() - 17, today.getMonth(), today.getDate());

  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      const borrowerId = '123';
      // Send the image data to the backend
      this.http.post<string>('http://localhost:8090/api/v1/{borrowerId}/profilepic', formData).subscribe(
        (response) => {
          // Handle the response from the backend (e.g., success message)
          console.log('Profile picture uploaded:', response);
          this.selectedFileName = file.name;

          this.profilePictureUrl = response;
        },
        (error) => {
          console.error('Error uploading profile picture:', error);
        }
      );
    }
  }

    saveDetails(): void {
      if (this.formData.invalid) {
        this._snackBar.open('Please fill out all required fields', 'OK', {
          duration: 5000,
        });
        return;
      }
      this.formSubmitted = true;

      const phoneNumber = this.formData.phoneNumber;
      const zipCode = this.formData.address.zipCode;
      const emailId = this.formData.emailId;
      const age = this.calculateAge(this.formData.dateOfBirth);
      const amountSelected = this.formData.loanDetails.amount;
      const tenureSelected = this.formData.loanDetails.tenure;

      if (this.isFieldEmpty('firstName') || this.isFieldEmpty('lastName') || this.isFieldEmpty('emailId')) {
        return;
      }

      if(age<18 ){
            this._snackBar.open('Age Must be At least 18 years','OK',{
              duration:5000,
            });
          }
      if (!this.isValidEmail(emailId)) {
        this._snackBar.open('Invalid Email Address', 'OK', {
          duration: 5000,
        });
        return;
      }

      if (!this.isValidPhoneNumber(phoneNumber)) {
        this._snackBar.open(
          'Invalid Phone Number. Please Enter 10 digits',
          'OK',
          {
            duration: 5000,
          }
        );
        return;
      }

      if (!/^\d{6}$/.test(zipCode)) {
        this._snackBar.open('Zip Code must be exactly 6 digits', 'OK', {
          duration: 5000,
        });
        return;
      }
      if(tenureSelected>36){
        this._snackBar.open('Tenure should be 36 at max!', 'OK', {
          duration: 5000,
        });
        return;
      }
      this.detailsSaved = true;
      console.log(this.formData);
      this.http.post<BorrowerDetails>('http://localhost:8090/personaldetails/details', this.formData)
      .subscribe((response: BorrowerDetails) => {
        // Handle the response from the server
        console.log('User Personal Details Saved: ', response);
        // Optionally, you can reset the form here
        this.formData = {
          address:{},
          loanDetails:{}
        };
        this.selectedFileName = '';
        // this.router.navigate(['/document-upload']);
        alert("User Personal Details Uploaded Successfully!");
      },
      (error) => {
        console.error('Error saving user details: ', error);
      }
      );
      setTimeout(() => {
        this.detailsSaved = true; // Set the variable to true to display the success message
      }, 2000);
      this.router.navigate(['/success']);
    }

    isValidPhoneNumber(phoneNumber: any): boolean {
      return /^\d{10}$/.test(phoneNumber);
    }

    isValidEmail(email: string): boolean {
      
      return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }

    isFieldEmpty(fieldName: string): boolean {
      const fieldValue = this.formData[fieldName];
      if (!fieldValue) {
        this._snackBar.open(`${fieldName} is required`, 'OK', {
          duration: 5000,
        });
        return true;
      }
      return false;
    }

    updateDetails() {
      this.formSubmitted = false;
      this.detailsSaved = false;
    }

    calculateAge(dateOfBirth:Date): number{
      const today=new Date();
      const birthDate = new Date(dateOfBirth);
      let age =today.getFullYear()-birthDate.getFullYear();
      const monthDiff=today.getMonth()-birthDate.getMonth();

      if(monthDiff<0 || monthDiff==0 && (today.getDate()<birthDate.getDate())){
        age--;
      }
      return age;
    }

    edit(borrowerDetails:BorrowerDetails){
      this.borrowerDetailsToUpdate = borrowerDetails;
    }
  }

interface BorrowerDetails {
  firstName: string;
  lastName: string;
  address: Address;
  emailId: string;
  phoneNumber: string;
  dateOfBirth: string;
  gender: string;
  displayName: string;
  loanDetails: LoanDetails;

}
interface LoanDetails{
  amount:number;
  tenure:number;
  createdTime: Date;
}
interface Address{
  street:string;
  village:string;
  zipCode:string;
  district:string;
  state:string;
  country:string;

}
