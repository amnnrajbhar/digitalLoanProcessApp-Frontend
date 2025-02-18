import { AuthService } from 'src/app/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  loans: any[] = [];
  constructor(private http: HttpClient, private authService: AuthService,private router:Router) { }

  ngOnInit() {
    this.getLoanStatus();
  }

  // getLoanStatus() {
  //   this.http.get('http://localhost:5000/api/loan-status', {
  //     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  //   }).subscribe((response: any) => {
  //     this.loans = response.loans;
  //   }, error => {
  //     alert('Error fetching loans');
  //   });
  // }
  getLoanStatus() {
    this.authService.loanStatus().subscribe((response: any) => {
      this.loans = response.loans;
    }, error => {
      alert('Error fetching loans');
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
