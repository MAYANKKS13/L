import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDataApplicationComponent } from './view-data-application.component';

describe('ViewDataApplicationComponent', () => {
  let component: ViewDataApplicationComponent;
  let fixture: ComponentFixture<ViewDataApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDataApplicationComponent]
    });
    fixture = TestBed.createComponent(ViewDataApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
