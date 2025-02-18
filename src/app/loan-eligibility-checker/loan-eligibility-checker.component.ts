import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanCheckerService } from '../loan-checker.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-loan-eligibility-checker',
  templateUrl: './loan-eligibility-checker.component.html',
  styleUrls: ['./loan-eligibility-checker.component.css']
})
export class LoanEligibilityCheckerComponent {
  loanForm: FormGroup;
  eligibilityResult: string = '';
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private loanService: LoanCheckerService,private router:Router) {
    this.loanForm = this.fb.group({
      income: ['', [Validators.required, Validators.min(1000)]],
      creditScore: ['', [Validators.required, Validators.min(300), Validators.max(850)]],
      employmentStatus: ['', Validators.required],
      loanAmount: ['', [Validators.required, Validators.min(5000)]]
    });
  }

  checkLoanEligibility() {
    if (this.loanForm.valid) {
      this.isLoading = true;
      this.loanService.checkEligibility(this.loanForm.value).subscribe(
        (response) => {
          debugger;
          this.eligibilityResult = response.result;
          if(this.eligibilityResult.indexOf('not') == -1){
            //alert('Not Eligible');

          }
          this.isLoading = false;
        },
        (error) => {
          this.eligibilityResult = 'Error checking eligibility. Please try again.';
          this.isLoading = false;
        }
      );
    }
  }

  onLoginClick(){
    this.router.navigate(['/login']);
  }
}
