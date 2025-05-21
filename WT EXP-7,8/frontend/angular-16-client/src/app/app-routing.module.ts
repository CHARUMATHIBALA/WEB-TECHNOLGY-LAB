import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { UserComplaintsComponent } from './components/user-complaints/user-complaints.component';
import { ViewComplaintsComponent } from './components/view-complaints/view-complaints.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-login', component: AdminLoginComponent }, // Admin Login route
  { path: 'user-complaints', component: UserComplaintsComponent },
  { path: 'view-complaints', component: ViewComplaintsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }