import { EmployeeInfoComponent } from './../../Employee';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: EmployeeInfoComponent =
    {
    };
  addFlag = false;
  disabledSalary = true;
  constructor(public employeeService: EmployeeService, public router: Router) {
    if (this.disabledSalary) {
      this.employee.salary = 0;
    }
  }

  ngOnInit() {
  }

  addEmployee({ value, valid }: { value: EmployeeInfoComponent[], valid: boolean }) {

    if (!valid) {
      console.log('Not correct');
      this.router.navigate(['addEmployee']);
    } else {
      console.log('correct');
      this.addFlag = true;
      this.employee.firstName = '';
      this.employee.lastName = '';
      this.employee.email = '';
      this.employee.country = '';
      this.employee.city = '';
      this.employee.phone = 0;
      this.employee.salary = 0;
      this.employeeService.addEmployee(value);
      this.router.navigate(['allEmployee']);
    }

  }

}
