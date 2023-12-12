import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailsChartComponent } from './loan-details-chart.component';

describe('LoanDetailsChartComponent', () => {
  let component: LoanDetailsChartComponent;
  let fixture: ComponentFixture<LoanDetailsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanDetailsChartComponent]
    });
    fixture = TestBed.createComponent(LoanDetailsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
