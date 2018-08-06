import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credintal = {
    password: '',
    email: ''
  };

  constructor(public router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.authService.Login(this.credintal.email, this.credintal.password).then(
      (result) => {
        console.log('loggin success');
        this.router.navigate(['/allEmployee']);
      }).catch((err) => {
        console.log(err.message);
        this.router.navigate(['/login']);
      });
  }
}
