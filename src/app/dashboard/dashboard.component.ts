import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartData, ChartType } from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  loanAmount = 1000000;
  interestRate = 8.75;
  loanTenure = 15;
  emi = 0;
  totalInterest = 0;
  totalAmount = 0;

  pieChartLabels: string[] = ['Principal Amount', 'Interest Amount'];
  pieChartType: ChartType = 'pie';

  pieChartData: ChartData<'pie'> = {
    labels: this.pieChartLabels,
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ['#36A2EB', '#FF6384']
      }
    ]
  };
constructor(private router: Router){}
  ngOnInit() {
    this.calculateEMI();
  }

  calculateEMI() {
    const monthlyRate = this.interestRate / 12 / 100;
    const months = this.loanTenure * 12;
    this.emi = (this.loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                (Math.pow(1 + monthlyRate, months) - 1);
    this.totalAmount = this.emi * months;
    this.totalInterest = this.totalAmount - this.loanAmount;

    this.pieChartData = {
      labels: this.pieChartLabels,
      datasets: [
        {
          data: [this.loanAmount, this.totalInterest],
          backgroundColor: ['#36A2EB', '#FF6384']
        }
      ]
    };
  }
  goToLogin() {
    this.router.navigate(['/home']);
  }
}
