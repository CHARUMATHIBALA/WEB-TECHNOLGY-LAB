import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  studentID = '';
  department = '';
  complaint = '';
  errorMessage = false;

  constructor(private http: HttpClient, private router: Router) {}

  submitComplaint() {
    if (!this.name || !this.studentID || !this.department || !this.complaint) {
      this.errorMessage = true;
      return;
    }

    const complaintData = {
      name: this.name,
      studentID: this.studentID,
      department: this.department,
      complaint: this.complaint
    };

    this.http.post('http://localhost:3005/api/complaints', complaintData).subscribe({
      next: () => {
        alert('Registered Successfully!');
        this.router.navigate(['/view-complaints']);
      },
      error: () => alert('Failed to register biodata')
    });
  }
}
