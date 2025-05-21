import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IndexComponent } from './components/index/index.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComplaintsComponent } from './components/user-complaints/user-complaints.component';
import { ViewComplaintsComponent } from './components/view-complaints/view-complaints.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AdminLoginComponent,
    RegisterComponent,
    UserComplaintsComponent,
    ViewComplaintsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }