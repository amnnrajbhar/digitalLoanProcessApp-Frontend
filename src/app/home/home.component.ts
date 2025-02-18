import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAdmin: boolean = false;
  constructor(private router: Router){}
  ngOnInit() {
    console.log(localStorage);
    if (localStorage?.['isAdmin'] == 'true') {
      debugger;
      this.isAdmin = true;
    }
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
