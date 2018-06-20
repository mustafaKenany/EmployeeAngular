import { Component, OnInit } from '@angular/core';
import { EmployeeInfoComponent } from '../../Employee';
import { EmployeeService } from '../../services/employee.service';
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
  constructor(public employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeService.getEmployee().snapshotChanges().subscribe(
      employees => {
        if (this.employeeService.Employee) {
          this.Employees = this.employeeService.Employee;
          this.EmployeeFlag = true;
        }
        // this.getTotalEmployee();

      }
    );
  }

  getTotalEmployee() {
    for (let index = 0; index < this.Employees.length; index++) {
      this.totalEmployee += 1;
      this.totalEmployeeSalary = parseFloat(this.Employees[index].salary.toString());
    }
    console.log('Total: ' + this.totalEmployee);
    console.log('TotalSalary: ' + this.totalEmployeeSalary);
  }
}
