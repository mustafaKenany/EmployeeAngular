import { Component, OnInit, Injectable } from '@angular/core';
import { EmployeeInfoComponent } from '../Employee';
import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  dbemployees: AngularFireList<any[]>;
  Employee = [];
  employeeArrayLenght: number;
  employee: EmployeeInfoComponent;


  constructor(public db: AngularFireDatabase) {
    this.dbemployees = this.db.list('employees');
    this.dbemployees.snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        const y = action.payload.toJSON();
        y['$key'] = action.payload.key;
        this.Employee.push(y as EmployeeInfoComponent);
      });
    });
    this.Employee = [];
  }

  getEmployee() {
    return this.dbemployees;
  }
  addEmployee(employee: EmployeeInfoComponent[]) {
    this.Employee = [];
    console.log(employee);
    return this.dbemployees.push(employee);

  }
  searchEmployee(employeeID: any) {
    // this.Employee = [];
    let y;
    this.dbemployees = this.db.list('employees');
    this.dbemployees.snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        y = action.payload.toJSON();
        y['$key'] = action.payload.key;
        if (y['$key'] === employeeID) {
          this.Employee.push(y as EmployeeInfoComponent);
          return y;
        }
      });
    });
  }

}
