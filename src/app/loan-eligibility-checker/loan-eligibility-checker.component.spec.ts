import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanEligibilityCheckerComponent } from './loan-eligibility-checker.component';

describe('LoanEligibilityCheckerComponent', () => {
  let component: LoanEligibilityCheckerComponent;
  let fixture: ComponentFixture<LoanEligibilityCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanEligibilityCheckerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanEligibilityCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
