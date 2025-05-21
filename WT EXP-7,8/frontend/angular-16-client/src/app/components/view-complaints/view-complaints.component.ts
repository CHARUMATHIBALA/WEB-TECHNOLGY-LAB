import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-complaints',
  templateUrl: './view-complaints.component.html',
  styleUrls: ['./view-complaints.component.css']
})
export class ViewComplaintsComponent implements OnInit {
  complaints: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    if (!localStorage.getItem('adminLoggedIn')) {
      alert('Access denied! Admins only.');
      this.router.navigate(['/admin-login']);
    } else {
      this.loadComplaints();
    }
  }

  loadComplaints() {
    this.http.get<any[]>('http://localhost:3005/api/complaints')
      .subscribe(data => this.complaints = data);
  }

  resolveComplaint(id: string) {
    this.http.put(`http://localhost:3005/api/complaints/${id}`, { status: 'Resolved' })
      .subscribe(() => this.loadComplaints());
  }

  deleteComplaint(id: string) {
    if (confirm('Are you sure you want to delete this complaint?')) {
      this.http.delete(`http://localhost:3005/api/complaints/${id}`)
        .subscribe(() => this.loadComplaints());
    }
  }

  editComplaint(c: any) {
    alert('Edit modal logic can be added here.');
  }
}
