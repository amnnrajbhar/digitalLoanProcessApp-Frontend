import { TestBed } from '@angular/core/testing';

import { LoanCheckerService } from './loan-checker.service';

describe('LoanCheckerService', () => {
  let service: LoanCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
