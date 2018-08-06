import { Component, OnInit } from '@angular/core';
import { EmployeeInfoComponent } from '../../Employee';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  Employees: EmployeeInfoComponent[];
  EmployeeFlag = false;
  totalEmployee: number;
  totalEmployeeSalary: number;
  arrayLength: number;
  constructor(public employeeService: EmployeeService, public router: Router, private auth: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.auth.getAuthentication().subscribe(auth => {
      if (auth) {
        // this.employeeService.getEmployee().snapshotChanges().subscribe(
        //   employees => {
        //     if (this.employeeService.Employee) {
        //       this.Employees = this.employeeService.Employee;
        //       console.log(this.employeeService.Employee);
        //       this.EmployeeFlag = true;
        //     }
        //     // this.getTotalEmployee();
        //   }
        // );
        this.Employees = this.employeeService.getEmployee();
        this.EmployeeFlag = true;
        console.log(this.Employees);
      } else {
        this.router.navigate(['/login']);
      }
    });

  }

  getTotalEmployee() {
    for (let index = 0; index < this.Employees.length; index++) {
      this.totalEmployee += 1;
      this.totalEmployeeSalary = parseFloat(this.Employees[index].salary.toString());
    }
    console.log('Total: ' + this.totalEmployee);
    console.log('TotalSalary: ' + this.totalEmployeeSalary);
  }
  deleteEmployee(id) {
    this.employeeService.deleteEmployee(id);
    this.router.navigate(['allEmployee']);
  }
}
