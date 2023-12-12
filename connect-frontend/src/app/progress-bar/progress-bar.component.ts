import { Component, OnInit } from '@angular/core';
import { LoanStatusService } from 'src/app/services/loan-status.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit{

  emailId: string | null= 'robin@gmail.com';

  status = ["fa fa-check light-color", "fa fa-refresh dark-color", "fa fa-times blank-color", "fa fa-times blank-color"]
  statusReceived:string = "application_submitted"

  constructor(private StatusService: LoanStatusService, private route: ActivatedRoute)
  {
    const emailId = localStorage.getItem("emailId");

    if(emailId)
    {
      this.emailId = emailId
    }
  }

  async ngOnInit(): Promise<void> {
      
      await this.getLoanStatusData();
      
      // Total there are 5 stages / types of status (we did'nt included loan_rejected in above array)
      let typesOfStatus = ["application_submitted",  "pending", "accepted", "loan_dispersed"]


      if(this.statusReceived==="accepted")          // If the loan loan is accepted turn all 4 dark green
      {
        this.status = ["fa fa-check dark-color", "fa fa-check dark-color", "fa fa-check dark-color", 
        "fa fa-check dark-color"]                 
      }

      else if(this.statusReceived==="rejected")     // If the loan loan is rejected
      {
        this.status[1] = "fa fa-check light-color"
        this.status[2] = "fa fa-times red-color"
        return                 
      }

      else                // If some unknown code is sent from server
      {
        console.log("Dont Exist")
        return
      }

    }
  
  async getLoanStatusData(): Promise<void> {
      return new Promise<void>((resolve) => {
        this.StatusService.getStatusData().subscribe((result:string) => {
          this.statusReceived = result;
          console.log("Status Received is: ", this.statusReceived);
          resolve();
        });
      });
    }
  }
