import { Component, OnInit } from '@angular/core';
import {Applications} from '../Service-Admin/applications'
import { ApplicationService } from '../Service-Admin/application.service';

import {Router} from '@angular/router';
import { ViewDataApplicationComponent } from '../view-data-application/view-data-application.component';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  applications:Applications[]=[];
  constructor(private applicationService: ApplicationService,private router:Router){}
  
  ngOnInit():void {
this.getApplications();

//console.warn(this.getApplications());
  }
  view(emailId:string){
    this.router.navigate(['/view-data-application',emailId]);
  }
 viewapplication(emailId:string){
  this.router.navigate(['/view-application',emailId])
 }
  public getApplications(){
    this.applicationService.getApllicationList().subscribe(data=>{
      this.applications=data;
    
      console.warn(data);
       
    })
  }
  deleteApplication(emailId:string){
    this.applicationService.deleteApplicationFromDataBase(emailId).subscribe(res=>{
      this.getApplications();
    })
  }
  GotoDashboard(){
    this.router.navigate(['/'])
}
gotoDashBoard(){
  this.router.navigate(['/admin-dashboard']);
  }

}