import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotFoundComponent } from './components/pagenot-found/pagenot-found.component';

const appRoutes:Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'/home',
    component:HomeComponent
  },
  {
    path:'/dashboard',
    component:DashboardComponent
  },
  {
    path:'/login',
    component:LoginComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeInfoComponent,
    NavbarComponent,
    HomeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    SideBarComponent,
    RegistrationComponent,
    SettingsComponent,
    LoginComponent,
    PagenotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
