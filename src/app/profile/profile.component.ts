import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any = null;
  constructor(private service:LoginService) { }

  ngOnInit(): void {

    this.user =this.service.getUser();
    
  }

}
