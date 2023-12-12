import { TestBed } from '@angular/core/testing';

import { CustomloanService } from './customloan.service';

describe('CustomloanService', () => {
  let service: CustomloanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomloanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
