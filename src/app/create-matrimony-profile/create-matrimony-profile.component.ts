import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { LoginService } from '../login/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-matrimony-profile',
  templateUrl: './create-matrimony-profile.component.html',
  styleUrls: ['./create-matrimony-profile.component.css']
})
export class CreateMatrimonyProfileComponent implements OnInit {

  constructor( private regservice:RegisterService, private loginService:LoginService,
    private router:Router, private snack:MatSnackBar) { }

  matrimony={
    
    firstName:'',
    lastName:'',
    email:'',
	  contactNo:'',
	  nativeLanguage:'',
	  createProfileFor:'',
	  age:0,
    caste:'',
	  gender:'',
	  color:'',
	  height:'0',
	  anualIncome:'0',
	  qualification:'',
	  gothram:'',
	  lookingFor:'',
    placeOfOrigin:'',
    permanentAddress:'',
    city:'',
    state:'',
    country:'',
	  preferColor:'',
	  preferHeight:'',
	  preferAnualIncome:'',
    preferQualification:'',
	  preferOtherSpec:'',
    photo:''



  }
  user:any= null;
  username:string='';

  onSubmit(){

    console.log(this.user.username);
     this.username=this.user.username; 
    this.regservice.createMatrimonyProfile(this.matrimony,this.username).subscribe((data:any) =>{
    console.log(data)
    Swal.fire('Matrimony Profile Added Successfully !!', 'Profile id is ' + data.profileId, 'success');
    this.router.navigate(['/user/']);
    
}, 
error=>{
  console.log(error)
  this.snack.open(error.error.text, 'Some thing Went wrong!!!!!!!', {
    duration: 3000,
  });
})

}

  ngOnInit(): void {
    this.user=this.loginService.getUser();
  }

}
