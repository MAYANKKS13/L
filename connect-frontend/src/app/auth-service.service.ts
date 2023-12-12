import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { adminArr } from './constants/adminArray';





@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  url: string = 'http://localhost:8060/user';
  constructor(private http:HttpClient, private router:Router, private toastr: ToastrService) { 
  }


     createNewUser(data:any)
     {
          
           
           this.http.post(this.url + '/signup' , data).subscribe((response)=>{  
            this.toastr.success("SignedUp Successfully",undefined,{positionClass: 'toast-top-center'});
               
      }
           ,(error)=>{
                
            if(error.status==403)
            {
              this.toastr.error("User exists already.",undefined,{positionClass: 'toast-top-center'});
           }
           else{
            this.toastr.error("Password must contain atleast 8 characters.",undefined,{positionClass: 'toast-top-center'});
           }
      });


     }


     authenticateUser(data:any)
     {
           
           this.http.post(this.url + '/login' , data).subscribe((response)=>{
            this.toastr.success("LoggedIn Successfully",undefined,{positionClass: 'toast-top-center'})
          if(adminArr.includes(data.email)){
            this.router.navigate(["admin-dashboard"]);
          }
          else {
            this.router.navigate(["loan"]);
           }
          // this.router.navigate(["loan"]);



            localStorage.setItem("jwt",JSON.stringify(response));
           },(error)=>{
            
            if(error.status==401)
            {
              this.toastr.error("User does not exists.",undefined,{positionClass: 'toast-top-center'});
           }
           else{
            this.toastr.error("Incorrect Password or email",undefined,{positionClass: 'toast-top-center'});
           }
       } )

     }


    
    

}
