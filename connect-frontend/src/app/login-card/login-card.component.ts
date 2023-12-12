import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent {

  
   email:string="";
   password:string="";
   confirmPassword="";
   loginAnimation:boolean=true;

   constructor(private authenticate:AuthServiceService, private toastr: ToastrService, private router:Router) { 
  }

   
  toggle(){
    this.loginAnimation=!this.loginAnimation;
  }


   ValidateEmail(mail:string) 
  {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
      return (true)
    }
    this.toastr.error("You have entered an invalid email address!",undefined,{positionClass: 'toast-top-center'})
      return (false)
  }


   onSignUp(){
     if(this.ValidateEmail(this.email))
     {
    this.authenticate.createNewUser({
      email:this.email,
      password:this.password
    
    });
   
    this.email="";
    this.password="";
    this.confirmPassword="";
    this.toggle();
  }
  }
   
  onLogIn(){

    this.authenticate.authenticateUser({
      email:this.email,
      password:this.password
    });
    this.email="";
    this.password="";
  }

  onClickLoan(){
    this.router.navigate(["/"]);
  }



}
