import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio'; // Import MatRadioModule
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { ToastrModule } from 'ngx-toastr';
import { NgApexchartsModule } from 'ng-apexcharts';


import { AppComponent } from './app.component'; 
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { CreateApplicationComponent } from './create-application/create-application.component';
import { ViewApplicationComponent } from './view-application/view-application.component';
import { ViewDataApplicationComponent } from './view-data-application/view-data-application.component'
import { LoginCardComponent } from './login-card/login-card.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoanComponent } from './loan/loan.component';
import { CustomComponent } from './custom/custom.component';
import { LoanApplicationFormComponent } from './loan-application-form/loan-application-form.component';
import { EmiStatusTrackComponent } from './emi-status-track/emi-status-track.component';
 import {DetailsFormComponent} from './details-form/details-form.component';
import {SuccessPageComponent} from './success-page/success-page.component'
import { LoanDetailsCardsComponent } from './loan-details-cards/loan-details-cards.component';
import { LoanDetailsChartComponent } from './loan-details-chart/loan-details-chart.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';
import { CheckoutEmiPaymentComponent } from './checkout-emi-payment/checkout-emi-payment.component';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,

    AvatarComponent,
    ApplicationListComponent,
    DashboardComponent,
    LogoutComponent,
    HelpPageComponent,
    CreateApplicationComponent,
    ViewApplicationComponent,
    ViewDataApplicationComponent,
    LoginCardComponent,
    CheckoutComponent,
    HomeComponent,
    HomeComponent,
    LoanComponent,
    CustomComponent,
    LoanApplicationFormComponent,
    CustomComponent,
    CustomComponent,
    EmiStatusTrackComponent,
    DetailsFormComponent,
    SuccessPageComponent,
    LoanDetailsCardsComponent,
    LoanDetailsChartComponent,
    LoanDetailsComponent,
    TermsAndConditionsComponent,
    TransactionTableComponent,
    CheckoutEmiPaymentComponent,
    DummyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
     NgbModule,
     FormsModule,
     NgApexchartsModule,


    // MatCardModule,
    // MatButtonModule
    FormsModule,
    MatSnackBarModule,
    FontAwesomeModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSnackBarModule,
    ToastrModule.forRoot()

  ],
  providers: [DatePipe, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }