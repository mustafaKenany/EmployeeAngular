import { Component, OnInit, Injectable } from '@angular/core';
import { EmployeeInfoComponent } from '../Employee';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';



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
    // this.Employee = [];
  }

  getEmployee() {
    return this.Employee;
  }
  addEmployee(employee: EmployeeInfoComponent[]) {
    this.Employee = [];
    console.log(employee);
    return this.dbemployees.push(employee);

  }
  searchEmployee(employeeID: any) {
    // this.Employee = [];
    return new Promise<EmployeeInfoComponent>((resolve) => {
      this.dbemployees = this.db.list('employees');
      this.dbemployees.snapshotChanges().subscribe(actions => {
        actions.forEach(action => {
          const y = action.payload.toJSON();
          y['$key'] = action.payload.key;
          if (y['$key'] === employeeID) {
            resolve(y);
          }
        });
      });
    });
  }
  editEmployee(employee: EmployeeInfoComponent[], id: any) {
    this.Employee = [];
    return this.dbemployees.update(id, employee);
  }

  deleteEmployee(id: any) {
    this.Employee = [];
    return this.dbemployees.remove(id);
  }

}
