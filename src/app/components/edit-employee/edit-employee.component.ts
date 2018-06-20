import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmployeeService } from './../../services/employee.service';
import { EmployeeInfoComponent } from './../../Employee';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeID: any;
  Employee: EmployeeInfoComponent;
  hasSalary = false;
  updatedSalary = false;
  constructor(public employeeService: EmployeeService, public router: Router,
    public activetedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.employeeID = this.activetedRouter.snapshot.params['id'];
    this.employeeService.searchEmployee(this.employeeID).then(employee => {
      this.Employee = employee as EmployeeInfoComponent;
      console.log(this.Employee.city);

    });
  }

}
