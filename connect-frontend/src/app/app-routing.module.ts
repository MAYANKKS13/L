import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

import { AvatarComponent } from './avatar/avatar.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateApplicationComponent } from './create-application/create-application.component';
import { ViewApplicationComponent } from './view-application/view-application.component';
import { ViewDataApplicationComponent } from './view-data-application/view-data-application.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { LoanApplicationFormComponent } from './loan-application-form/loan-application-form.component';
import { LoanComponent } from './loan/loan.component';
import { CustomComponent } from './custom/custom.component';
import { HomeMainComponent } from './home-main/home-main.component';
import {EmiStatusTrackComponent} from './emi-status-track/emi-status-track.component';
import {SuccessPageComponent} from './success-page/success-page.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { CheckoutEmiPaymentComponent } from './checkout-emi-payment/checkout-emi-payment.component';
import { DummyComponent } from './dummy/dummy.component';
import { AsyncResolverService } from './services/async-resolver.service';

const routes: Routes = [
  {path:'status', component: ProgressBarComponent},
  { path:'login', component:LoginCardComponent},
    {path:'admin-dashboard', component:DashboardComponent},
    {path:'application', component:ApplicationListComponent},
    {path:'client',component:AvatarComponent},
    {path:'help-page',component:HelpPageComponent},
    {path:'logout',component:LogoutComponent},
    // {path:'',redirectTo:'application',pathMatch:'full'},
    {path:'create-application',component:CreateApplicationComponent },
    {path:'view-application/:id',component:ViewApplicationComponent},
    {path:'view-data-application/:id',component:ViewDataApplicationComponent},
    {path: 'checkout', component: CheckoutComponent},
  { path: 'checkout/:loanId', component: CheckoutComponent },

  {path:'status', component: ProgressBarComponent},
  // { path:'home',  canActivate:[authGuard],component:HomeComponent },
  
  {path:'',component:HomeMainComponent},
  { path: 'loan-application', component: LoanApplicationFormComponent },
  { path: 'loan', component: LoanComponent },
  { path: 'custom', component: CustomComponent },
  {path:'personal-details',component:DetailsFormComponent},
  { path: 'success', component: SuccessPageComponent },
  {path:'emitrack',component:EmiStatusTrackComponent},

  {
    path: 'loan-details', component: LoanDetailsComponent,
    resolve: {
      products: AsyncResolverService
    }
  },
  // {path:'loan-details', component:LoanDetailsComponent},
  {path:'dummy', component:DummyComponent},
  {path:'emi-payment/:emailId/:payingMonth', component:CheckoutEmiPaymentComponent}

]
   




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
