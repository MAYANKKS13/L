// import { Component, OnInit } from '@angular/core';
// import { ApplicationService } from '../Service-Admin/application.service';
// import { Applications } from '../Service-Admin/applications';
// import { Route, Router } from '@angular/router';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit{
//   applications!:Applications[];
//   constructor(private applicationService:ApplicationService,private router:Router){}
//   ngOnInit():void {
//     this.getAllApplication();
    
    
//       }
//       goToApplicationPage(){
//         this.router.navigate(['/application'])
//       }
//  public getAllApplication(){
//   this.applicationService.getApllicationList().subscribe(data=>{
//     this.applications=data;
//   })
//  }
  

// }
import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../Service-Admin/application.service';
import { Applications } from '../Service-Admin/applications';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  //applications:Applications[];
  applications :Applications[]=[];
  constructor(private applicationService:ApplicationService,private router:Router){}
  ngOnInit():void {
    this.getAllApplication();
    
    
      }
      goToApplicationPage(){
        this.router.navigate(['/application'])
      }
      GotoEmiPage(){
        this.router.navigate(['/emitrack'])
      }
 public getAllApplication(){
  this.applicationService.getApllicationList().subscribe(data=>{
    this.applications=data;
})
}


}
