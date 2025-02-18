import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environment } from './environment';
@Injectable({
  providedIn: 'root'
})
export class LoanCheckerService {
  private apiUrl = Environment.apiUrlProd;//'http://localhost:5000'; // Backend URL

  constructor(private http: HttpClient) {}

  checkEligibility(loanData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/eligibility`, loanData);
  }
}
