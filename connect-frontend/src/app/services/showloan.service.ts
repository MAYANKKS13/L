import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowloanService {
  loans() {
    throw new Error('Method not implemented.');
  }

  // url="http://localhost:8080/loans2";
 

  // constructor(private http:HttpClient) { }
  // loans()
  // {
  //   return this.http.get(this.url);
  // }

  //private apiUrl = 'http://localhost:9200/allloantypes2/_search'; // Replace with your API URL
  private apiUrl = 'http://localhost:8080/loans2';

  constructor(private http: HttpClient) { }

  // getLoans(): Observable<any> {
  //   //return this.http.get(this.apiUrl);


  //   const endpoint = `${this.apiUrl}/allloantypes2/_search`;
  //   return this.http.get(endpoint);
  // }

  searchLoans() {
    return this.http.get(this.apiUrl);
  }

}
