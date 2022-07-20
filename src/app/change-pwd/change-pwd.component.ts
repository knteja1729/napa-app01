import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../login/login.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.css']
})
export class ChangePwdComponent implements OnInit {

  changePwd={
    password:'',
    newPassword:'',
    confirmPassword:''

  }

  user:any= null;
  username:string='';
  constructor(private regservice:RegisterService, private loginService:LoginService,
    private router:Router, private snack:MatSnackBar) { }

    onSubmit(){

      if(this.user.authorities[0].authority=='ADMIN'){

        this.username=this.user.username; 
      this.regservice.updatePassword(this.changePwd,this.username).subscribe((data:any) =>{
        console.log(data)
        Swal.fire(data, 'success');
        this.router.navigate(['/admin/']);
        
    }, 
    error=>{
      console.log(error)
      this.snack.open(error.error.text, '', {
        duration: 4000,
      });
    })

      }else{

        this.username=this.user.username; 
      this.regservice.updatePassword(this.changePwd,this.username).subscribe((data:any) =>{
        console.log(data)
        Swal.fire(data, 'success');
        this.router.navigate(['/user/']);
        
    }, 
    error=>{
      console.log(error)
      this.snack.open(error.error.text, '', {
        duration: 4000,
      });
    })

      }
      
    }

  ngOnInit(): void {
    this.user=this.loginService.getUser();
  }

}
