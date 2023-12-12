import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Applications } from './applications';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
 private baseURL="http://localhost:8086/applicationsDetails"

  constructor(private httpClient:HttpClient) { }
  getApllicationList():Observable<Applications[]>{
    return this.httpClient.get<Applications[]>(this.baseURL);
  
  }
  createApplicant(applications:Applications):Observable<object>{
    return this.httpClient.post(this.baseURL,applications);
  }
  getApplicantById(emailId:string):Observable<Applications>{
    console.log(emailId);
    console.log("Above is inside service");

    const url=`${this.baseURL}/email/${emailId}`;
    return this.httpClient.get<Applications>(url);   //`${this.baseURL}+${id}this.baseURL+/`+Id
  
   
  }
  updateApplicationStatus(Id:string,applications:Applications):Observable<object>{
    return this.httpClient.put(this.baseURL+`/`+Id,applications);
  }
  deleteApplicationFromDataBase(id:string):Observable<object>{
    return this.httpClient.delete(this.baseURL+`/`+id);
}
}