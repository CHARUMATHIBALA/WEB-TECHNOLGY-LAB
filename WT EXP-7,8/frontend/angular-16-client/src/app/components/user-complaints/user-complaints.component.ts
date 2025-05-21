import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-complaints',
  templateUrl: './user-complaints.component.html',
  styleUrls: ['./user-complaints.component.css']
})
export class UserComplaintsComponent {
  studentID = '';
  complaints: any[] = [];

  constructor(private http: HttpClient) {}

  fetchComplaints() {
    if (!this.studentID) {
      alert('Please enter your Heartconnect ID.');
      return;
    }

    this.http.get<any[]>(`http://localhost:3005/api/complaints/user/${this.studentID}`)
      .subscribe({
        next: data => this.complaints = data,
        error: () => alert('Failed to fetch complaints')
      });
  }
}
