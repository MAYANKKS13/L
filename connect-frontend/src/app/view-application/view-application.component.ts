import { Component ,OnInit} from '@angular/core';
import { Applications } from '../Service-Admin/applications';
import { ApplicationService } from '../Service-Admin/application.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent implements OnInit {
  // applications:Applications=new Applications();
  applications!:Applications;
  emailId:any;
  constructor(private applicationService:ApplicationService,private route:ActivatedRoute,private router:Router){

  }
  ngOnInit():void{
//     this.id=this.route.snapshot.params[this.applications.emailId];
// this.applicationService.getApplicantById(this.id).subscribe(data=>{
//   this.applications=data;
// },err=>console.error(err));
this.route.params.subscribe((params)=>{
  this.emailId=params['id'];
  if(this.emailId){
    this.applicationService.getApplicantById(this.emailId).subscribe((data)=>{
      this.applications=data;
    })
  }
})
 
  }
onSubmit(){
this.applicationService.updateApplicationStatus(this.emailId,this.applications).subscribe(data=>{
  this.goToApplicationList();
})
}
goToApplicationList(){
  this.router.navigate(['/application']);
}
giveAlert(){
  alert("Status Updated Successfully");
}
}
