import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  loan = { amount: '', tenure: '', income: '', purpose: '' };
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  // applyLoan() {
  //   this.http.post('http://localhost:5000/api/apply-loan', this.loan, {
  //     //this.auth.applyLoan({this.loan,
  //     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  //   }).subscribe(response => {
  //     alert('Loan Application Submitted');
  //     //this.getLoanStatus();
  //     this.loan = { amount: '', tenure: '', income: '', purpose: '' }; // Reset form
  //     this.router.navigate(['/home']);
  //   }, error => {
  //     alert('Error applying for loan');
  //   });
  // }

  applyLoan() {
    this.authService.applyLoan(this.loan).subscribe(
      (response) => {
        debugger;
        alert('Loan Application Submitted');
        this.loan = { amount: '', tenure: '', income: '', purpose: '' }; // Reset form
        this.router.navigate(['/home']);
      },
      (error) => {
        alert('Error applying for loan');
      }
    );
  }
  goToList() {
    this.router.navigate(['/list']);
  }
}
