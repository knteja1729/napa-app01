import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user:any = null;

  constructor(public login: LoginService, private route:Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
      this.login.loginStatusSubject.asObservable().subscribe((data) => {
       this.isLoggedIn = this.login.isLoggedIn();
       this.user = this.login.getUser();
       });
  }

  public logout() {
    this.login.logout();
    window.location.href = '/login';
  //   window.location.reload();
 // this.route.navigate(['home']);
  //window.location.reload();
     //this.login.loginStatusSubject.next(false);
  }

}
