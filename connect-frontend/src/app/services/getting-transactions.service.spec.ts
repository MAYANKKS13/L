import { TestBed } from '@angular/core/testing';

import { GettingTransactionsService } from './getting-transactions.service';

describe('GettingTransactionsService', () => {
  let service: GettingTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettingTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
