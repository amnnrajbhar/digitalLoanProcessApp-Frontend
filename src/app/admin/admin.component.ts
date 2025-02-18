import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loans: any[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient, private loanService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loadLoans();
  }

  // Load loan applications from the API
  loadLoans() {
    const token = localStorage.getItem('token'); // Assuming token is stored in local storage

    if (!token) {
      this.errorMessage = "You need to log in first!";
      return;
    }

    //this.http.get<any[]>('http://localhost:5000/api/', { headers }).subscribe(
    this.loanService.loanStatus().subscribe(
      (response: any) => {
        debugger;
        this.loans = response.loans;
      },
      (error) => {
        this.errorMessage = 'Failed to fetch loan applications';
      }
    );
  }

  approveLoan(loanId: any) {
    this.onAction(loanId, 'approve');
  }

  // Reject loan
  rejectLoan(loanId: any) {
    this.onAction(loanId, 'reject');
  }
  onAction(loanId: string, action: 'approve' | 'reject') {
    this.loanService.updateLoanStatus(loanId, action).subscribe({
      next: (response) => {
        alert(response.message);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        alert(`Error: ${error.error.error}`);
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/home']);
  }
}
