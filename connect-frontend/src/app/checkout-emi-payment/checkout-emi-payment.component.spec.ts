import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutEmiPaymentComponent } from './checkout-emi-payment.component';

describe('CheckoutEmiPaymentComponent', () => {
  let component: CheckoutEmiPaymentComponent;
  let fixture: ComponentFixture<CheckoutEmiPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutEmiPaymentComponent]
    });
    fixture = TestBed.createComponent(CheckoutEmiPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
