
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '../Service-Admin/application.service';
import { Applications } from '../Service-Admin/applications';
import { Address } from '../Service-Admin/applications';

@Component({
  selector: 'app-view-data-application',
  templateUrl: './view-data-application.component.html',
  styleUrls: ['./view-data-application.component.css']
})
export class ViewDataApplicationComponent implements OnInit{
  emailId :any;
  applications!:Applications ;
  address!: Address;
constructor(private route:ActivatedRoute,private applicationService:ApplicationService,private router:Router){}
ngOnInit(): void {

this.route.params.subscribe((params)=>{
  this.emailId=params['id'];  ///find the use params
  console.log(params);
  console.log(this.emailId);
  if(this.emailId){
    this.applicationService.getApplicantById(this.emailId).subscribe((data)=>{
      this.applications=data;
      console.log("hello");
      console.log(this.applications);
      console.log("data");
    
    });
    
  }
  console.log("outside the If condition");
})
 
}

goback(){
  this.router.navigate(['/application']);
}
goEmiTrack(){
  this.router.navigate(['/emitrack'])
}

}


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ApplicationService } from '../Service-Admin/application.service';
// import { Applications } from '../Service-Admin/applications';
// import { Address } from '../Service-Admin/applications';

// @Component({
//   selector: 'app-view-data-application',
//   templateUrl: './view-data-application.component.html',
//   styleUrls: ['./view-data-application.component.css']
// })
// export class ViewDataApplicationComponent implements OnInit{
//   id!:string;
//   applications!:Applications;
//   address!: Address;
// constructor(private route:ActivatedRoute,private applicationService:ApplicationService,private router:Router){}
// ngOnInit(): void {
//   this.id= this.route.snapshot.params[this.id];
//   this.applications=new Applications();
//   this.applicationService.getApplicantById(this.id).subscribe(res=>{
//  this.applications=res;
//  console.log(res);
//   });
 
// }
// goback(){
//   this.router.navigate(['/application']);
// }

// }
 