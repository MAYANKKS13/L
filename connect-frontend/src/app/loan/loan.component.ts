import { Component, OnInit } from '@angular/core';
import { ShowloanService } from "../services/showloan.service";

//import { Client } from 'elasticsearch';
import { Client, SearchResponse } from 'elasticsearch';

import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit  {

  //  loans: any;
  // constructor(private tomahawk:ShowloanService)
  // {
  //   tomahawk.loans().subscribe((data)=>{
  //     console.warn("data",data);
  //     this.loans=data;
  //   });

  // }




  loans: any; // Define the variable to hold the fetched data
  ShowloanService: any;

  constructor(private loanService: ShowloanService) { }

  ngOnInit(): void {
    this.fetchLoans();
  }

  fetchLoans(): void {
    this.loanService.searchLoans().subscribe(data => {
      this.loans = data;
      console.log(data);
    });
  }



  // ngOnInit(): void {
  //   this.ShowloanService.getLoans().subscribe((response: any) => {
  //     this.loans = response;
  //     console.log(this.loans); // You can process the data here as needed
  //   });
  // }


  // fetchLoans() {
  //   this.ShowloanService.searchLoans().subscribe(
  //     (data: any) => {
  //       this.loans = data.hits.hits.map((hit: any) => hit._source);
  //     },
  //     (error: any) => {
  //       console.error('Error fetching loans:', error);
  //     }
  //   );

  //   }




















}
