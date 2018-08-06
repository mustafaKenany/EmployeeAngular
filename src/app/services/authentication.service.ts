import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private authentication: AngularFireAuth) { }

  Login(email: string, password: string) {
    return new Promise((resolve, rejact) => {
      this.authentication.auth.signInWithEmailAndPassword(email, password).then(
        userData => resolve(userData), _error => rejact(_error)
      );
    });
  }
  Logout() {
    this.authentication.auth.signOut();
  }
  getAuthentication() {
    return this.authentication.authState;
  }
}
