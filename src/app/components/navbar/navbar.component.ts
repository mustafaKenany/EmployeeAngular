import { AuthenticationService } from '../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  enableRegister: boolean;
  emailUserLoggedIn: string;
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.getAuthentication().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.emailUserLoggedIn = auth.email;
        this.enableRegister = false;
        // console.log('LoggedIn' + this.isLoggedIn);
        // console.log('Register' + this.enableRegister);
        // console.log('Email' + this.emailUserLoggedIn);
      } else {
        this.isLoggedIn = false;
        this.enableRegister = true;
      }
    });
  }
  logout() {
    this.authenticationService.Logout();
    this.router.navigate(['/login']);
  }

}
