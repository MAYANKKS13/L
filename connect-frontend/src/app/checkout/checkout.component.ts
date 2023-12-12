import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent  {

  emailId: string | null= 'robin@gmail.com';



  // We load  Stripe
  stripePromise = loadStripe(environment.stripe);
  constructor(private http: HttpClient, private route: ActivatedRoute,   private router: Router) {
    const emailId = localStorage.getItem("emailId");

    if(emailId)
    {
      this.emailId = emailId
    }
    this.pay()
  }

  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      name: 'Processing Fee',
      currency: 'inr',
      // amount on cents *10 => to be on dollar
      amount: 9900,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/cancel',
      successUrl: `http://localhost:4200/status`,
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
