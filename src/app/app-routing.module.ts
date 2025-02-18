import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanEligibilityCheckerComponent } from './loan-eligibility-checker/loan-eligibility-checker.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './LoanApplication/crud/crud.component';
import { ListComponent } from './LoanApplication/list/list.component';

const routes: Routes = [
  { path: '', component: LoanEligibilityCheckerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'list', component: ListComponent },
  { path: 'eligibility', component: LoanEligibilityCheckerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
