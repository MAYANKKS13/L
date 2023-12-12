import { Component,OnInit } from '@angular/core';
import { ApplicationService } from '../Service-Admin/application.service';
import { ActivatedRoute,Route, Router } from '@angular/router';
import { Applications } from '../Service-Admin/applications';
@Component({
  selector: 'app-emi-status-track',
  templateUrl: './emi-status-track.component.html',
  styleUrls: ['./emi-status-track.component.css']
})
export class EmiStatusTrackComponent implements OnInit {
  emailId!: string;
  applications:Applications[]=[];
  details!: Applications;
  constructor(private applicationService:ApplicationService,private route:ActivatedRoute,private router:Router){}
ngOnInit(){
 
   
this.applicationService.getApllicationList().subscribe((data:any)=>{
  this.applications=data;
  console.log("all list");
  console.log(data);
})

  
}
goToUser(emailId:string){
  // this.route.params.subscribe((res)=>{
  //   this.emailId=res['emailId'];
  //   if(this.emailId){
  //     this.applicationService.getApplicantById(this.emailId).subscribe((val)=>{
  //       this.details=val;
  //     })
  //   }
  // })
  this.router.navigate(['/view-data-application',emailId]);

}
gotoDashBoard(){
this.router.navigate(['/admin-dashboard']);
}

}