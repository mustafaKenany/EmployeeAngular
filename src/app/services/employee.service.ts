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
  constructor(public db: AngularFireDatabase) {
    this.dbemployees = this.db.list('employees');
    this.dbemployees.snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        const y = action.payload.toJSON();
        y['$key'] = action.payload.key;
        this.Employee.push(y as EmployeeInfoComponent);
      });
    });
  }

  getEmployee() {
    return this.dbemployees;
  }
}
