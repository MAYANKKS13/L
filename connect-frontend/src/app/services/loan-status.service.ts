import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoanStatusService {
  
  apiUrl = `http://localhost:8000/applicationsDetails/user`; // Replace with your API endpoint
  emailId: string | null= 'robin@gmail.com';

  constructor(private http: HttpClient) {
    const emailId = localStorage.getItem("emailId");

    if(emailId)
    {
      this.emailId = emailId
    }
  }
  

  getStatusData(): any {
    console.log("before request for status")
    const url = `${this.apiUrl}/${this.emailId}`;
    return this.http.get(url, { responseType: 'text' });
  }


  
}
