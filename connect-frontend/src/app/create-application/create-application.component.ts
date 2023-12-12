import { Component, OnInit } from '@angular/core';
import { Applications } from '../Service-Admin/applications';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationService } from '../Service-Admin/application.service';
@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit{
applications!:Applications;
constructor(private applicationService:ApplicationService,private router: Router){}
  ngOnInit(): void {
    console.log(this.applications)
}
saveApplicant(){
  this.applicationService.createApplicant(this.applications).subscribe(data=>{
this.goToApplicationPage();
  },er=> console.error(er)
  );
}
  goToApplicationPage(){
    this.router.navigate(['/application']);
  
}
 
onSubmit(){
this.saveApplicant();
}
 
}
