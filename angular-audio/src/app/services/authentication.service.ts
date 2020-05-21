import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserService} from './user.service';
import {Router} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  users: any;
  isAuthenticated = false;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) { }

  login(username, password) {
    this.isAuthenticated = false;
    this.userService.getUsers()
      .subscribe(res => {
        this.users = res;
        const listUsername = this.users.filter(user => user.username === username);
        listUsername.forEach(user => {
          if (user.password === password) {
            this.isAuthenticated = true;
            this.router.navigate(['main-paige']);
          }
        });
      });
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}
