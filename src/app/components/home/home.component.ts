// import { Component, OnInit } from '@angular/core';
// import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
// import { Observable } from 'rxjs';
// import { Router } from '@angular/router';
// import {EmployeeInfoComponent} from '../../Employee';

import { Component, OnInit } from '@angular/core';
// interface
import { EmployeeInfoComponent } from '../../Employee';
//services
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // employeeList:AngularFireList<any>;
  // employeeArray=[]

  // constructor(public db: AngularFireDatabase, public route:Router) {
  //   this.employeeList = db.list('employees')
  //   this.employeeList.snapshotChanges().subscribe(actions => {
  //     actions.forEach(action => {
  //       let y = action.payload.toJSON()
  //       y['$key'] = action.payload.key
  //       this.employeeArray.push(y as EmployeeInfoComponent)
  //     })
  //   })
  //   // console.log(this.employeeArray)
  // }

  Employees: EmployeeInfoComponent[];
  constructor(public employeeService: EmployeeService) { }


  ngOnInit() {
    this.employeeService.getEmployee().snapshotChanges().subscribe(
      employees => {
        this.Employees = this.employeeService.Employee;
        console.log(this.Employees)
      }
    )

  }

}
