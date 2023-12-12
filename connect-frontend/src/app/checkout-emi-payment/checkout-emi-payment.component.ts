import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanDetailsService } from '../services/loan-details.service';
@Component({
  selector: 'app-checkout-emi-payment',
  templateUrl: './checkout-emi-payment.component.html',
  styleUrls: ['./checkout-emi-payment.component.css']
})
export class CheckoutEmiPaymentComponent {

  emailIdFromRoute: string | null= 'example@gmail.com';
  payingMonth!:String |null;



  // We load  Stripe
  stripePromise = loadStripe(environment.stripe);
  constructor(private http: HttpClient, private route: ActivatedRoute,   private router: Router, private detailsService:LoanDetailsService) {
    this.emailIdFromRoute = this.route.snapshot.paramMap.get('emailId')
    this.payingMonth = this.route.snapshot.paramMap.get('payingMonth')

    this.pay()
  }

  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      name: 'EMI payment',
      currency: 'inr',
      // amount on cents *10 => to be on dollar
      amount: this.detailsService.emi*100,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/loan-details',
      successUrl: `http://localhost:4200/dummy?emailIdFromRoute=${this.emailIdFromRoute}&payingDate=${this.payingMonth}`,
    };


    const stripe = await this.stripePromise;

    // this is a normal http calls for a backend api
    this.http
      .post(`${environment.serverUrl}/payment`, payment)
      .subscribe((data: any) => {
        // I use stripe to redirect To Checkout page of Stripe platform
        stripe?.redirectToCheckout({
          sessionId: data.id,
        });

      });
  }

}
