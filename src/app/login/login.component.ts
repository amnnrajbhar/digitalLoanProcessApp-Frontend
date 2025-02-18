import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  users: any = [];
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {

  }
  getUserList() {
    this.authService.getUsers().subscribe(
      (response) => {
        debugger;
        this.users = response.users;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  login() {
    debugger;
    if (this.loginForm.valid) {
      debugger;
      this.authService.login(this.loginForm.value).subscribe(
        (res) => {
          localStorage.setItem('token', res.token);
          if (this.loginForm.value.email == 'Admin@gmail.com') {
            localStorage.setItem('isAdmin', 'true');
          }else{
            localStorage.setItem('isAdmin', 'false');
          }
          alert('Login successful!');
          this.router.navigate(['/home']);
        },
        (err) => {
          debugger;
          alert('Login failed: ' + err.error.error);
        }
      );
    }
  }
  onRegisterClick() {
    this.router.navigate(['/register']);
  }
}
