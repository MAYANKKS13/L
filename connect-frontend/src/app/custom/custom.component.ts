import { Component,OnInit } from '@angular/core';
import { CustomloanService } from "../services/customloan.service";

import { Client, SearchResponse } from 'elasticsearch';

import { ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit{

  customdetails:any;
  CustomloanService:any;
  

  constructor(
    private loanService: CustomloanService,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.fetchLoans();
  }

  fetchLoans(): void {
    this.loanService.searchLoans().subscribe(data => {
      this.customdetails = data;
    });
  }


  //-----------------------------25 september------------------------------------




  searchLoanAmount!: number;
  loans: any[] = [];
  error: string | null = null;


  onSearch(): void {
    if (!this.searchLoanAmount) {
      // Handle the case where the searchLoanAmount is not provided
      this.error = 'Please enter a loan amount.';
      return;
    }
  
    const apiUrl = `http://localhost:8080/customtypes/findByLoanAmount?loanAmount=${this.searchLoanAmount}`;
  
    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.loans = data;
        this.error = null; // Clear any previous error
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.error = 'An error occurred while fetching data.';
      }
    );
  }
 
  //-----------------------------25 september------------------------------------


//-----------------------------27 september------------------------------------



}









































