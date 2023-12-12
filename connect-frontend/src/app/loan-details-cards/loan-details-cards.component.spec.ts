import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailsCardsComponent } from './loan-details-cards.component';

describe('DetailsOfLoanComponent', () => {
  let component: LoanDetailsCardsComponent;
  let fixture: ComponentFixture<LoanDetailsCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanDetailsCardsComponent]
    });
    fixture = TestBed.createComponent(LoanDetailsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
