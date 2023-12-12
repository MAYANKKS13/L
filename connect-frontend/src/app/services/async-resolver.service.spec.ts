import { TestBed } from '@angular/core/testing';

import { AsyncResolverService } from './async-resolver.service';

describe('AsyncResolverService', () => {
  let service: AsyncResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
