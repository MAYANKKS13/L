import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiStatusTrackComponent } from './emi-status-track.component';

describe('EmiStatusTrackComponent', () => {
  let component: EmiStatusTrackComponent;
  let fixture: ComponentFixture<EmiStatusTrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmiStatusTrackComponent]
    });
    fixture = TestBed.createComponent(EmiStatusTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
