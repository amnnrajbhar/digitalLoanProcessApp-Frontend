import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environment } from './environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 private apiUrl = Environment.apiUrlProd;

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }
  getUsers(): Observable<any> {
    const token = localStorage.getItem('token');  // Get token from localStorage

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(`${this.apiUrl}/users`, { headers });
  }
  applyLoan(applicationForm: any): Observable<any> {
    const token = localStorage.getItem('token');  // Get token from localStorage

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(`${this.apiUrl}/apply-loan`, { headers }, applicationForm);
  }
  loanStatus(): Observable<any> {
    const token = localStorage.getItem('token');  // Get token from localStorage

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(`${this.apiUrl}/loan-status`, { headers });
  }
  
  // Admin Approve/Reject Loan
  // updateLoanStatus(loanId: string, action: 'approve' | 'reject'): Observable<any> {
  //   const token = localStorage.getItem('token');

  //   if (!token) {
  //     throw new Error('You need to log in first!');
  //   }

  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   const payload = { action };

  //   // Correct URL with loanId in the path
  //   const apiUrlWithLoanId = `http://localhost:5000/api/loan-action/${loanId}`;

  //   return this.http.post(apiUrlWithLoanId, payload, { headers });
  // }
  // Approve or Reject Loan
  private apiUrlLoan = 'http://localhost:5000/api/loan-action';
  updateLoanStatus(loanId: string, action: 'approve' | 'reject'): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.put(`${this.apiUrlLoan}/${loanId}`, { action }, { headers });
  }
}
