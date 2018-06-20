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
  Employee: any;
  hasSalary = false;
  updatedSalary = false;
  constructor(public employeeService: EmployeeService, public router: Router,
    public activetedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.employeeID = this.activetedRouter.snapshot.params['id'];
    console.log('Edit-Employee Componetes');
    console.log(this.employeeID);
    this.employeeService.searchEmployee(this.employeeID);
    // this.Employee = this.employeeService.searchEmployee(this.employeeID);
    // console.log(this.Employee);


  }

}
