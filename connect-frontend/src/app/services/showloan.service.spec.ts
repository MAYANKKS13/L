import { TestBed } from '@angular/core/testing';

import { ShowloanService } from './showloan.service';

describe('ShowloanService', () => {
  let service: ShowloanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowloanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
