import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomloanService {
  customdetails() {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:8080/customtypes';

  constructor(private http: HttpClient) { }

  searchLoans() {
    return this.http.get(this.apiUrl);
  }

  //25 september
  
  //25 september
}
