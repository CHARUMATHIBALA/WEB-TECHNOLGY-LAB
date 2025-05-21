import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  adminLogin() {
    if (this.username === 'charu' && this.password === 'charu675') {
      localStorage.setItem('adminLoggedIn', 'true');
      this.router.navigate(['/view-complaints']);
    } else {
      this.errorMessage = 'Invalid credentials';
    }
  }
}
