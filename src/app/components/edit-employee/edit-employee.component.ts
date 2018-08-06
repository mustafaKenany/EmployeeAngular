import { AuthenticationService } from './../../services/authentication.service';
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
  employee: EmployeeInfoComponent;
  hasSalary = false;
  updatedSalary = false;
  constructor(public employeeService: EmployeeService, public router: Router,
    public activetedRouter: ActivatedRoute, private authentiationSer: AuthenticationService) { }

  ngOnInit() {

    this.authentiationSer.getAuthentication().subscribe(auth => {
      if (auth) {
        this.employeeID = this.activetedRouter.snapshot.params['id'];
        this.employeeService.searchEmployee(this.employeeID).then(employee => {
          this.employee = employee as EmployeeInfoComponent;

        });
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
  editEmployee({ value, valid }: { value: EmployeeInfoComponent[], valid: boolean }) {

    if (!valid) {
      console.log('Not correct');
      this.router.navigate(['addEmployee']);
    } else {
      console.log('correct');
      this.employeeService.editEmployee(value, this.employeeID);
      this.employee.firstName = '';
      this.employee.lastName = '';
      this.employee.email = '';
      this.employee.country = '';
      this.employee.city = '';
      this.employee.phone = 0;
      this.employee.salary = 0;
      this.router.navigate(['allEmployee']);
    }
  }

  deleteEmployee() {
    if (confirm('Are you sure to delete this Employee')) {
      this.employeeService.deleteEmployee(this.employeeID);
      this.router.navigate(['allEmployee']);
    }
  }
}
