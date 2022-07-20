import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../login/login.service';
import { RegisterService } from '../register.service';
import { Country } from '../register/country';
import { SelectService } from '../register/select.service';
import { State } from '../register/state';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {



  
  selectedCountry: Country = new Country(2, 'Brazil');
  countries : Country[] | undefined;
  states: State[] | undefined;
  user:any=null;
  user1:any=null;
 

 
 
  constructor(private update:RegisterService, private service:LoginService, 
    private selectService : SelectService,
    private router:Router,
    private snack:MatSnackBar) { }

    ngOnInit(): void {
      this.user=this.service.getUser();
     // this.user1=this.service.getUserByEmail(this.user.username);
      console.log(this.user);
     // console.log(this.user1);
      this.countries = this.selectService.getCountries();
      this.onSelect(this.selectedCountry.id);
    }

   
    // user1={
    //  // id:this.user.id,
    //   firstName:'',
    //   lastName:'',
    //   gender:'',
    //   userName:this.user.username,
    //   password:this.user.password,
    //   phoneNum:'',
    //   address1:'',
    //   address2:'',
    //   country:'',
    //   state:'',
    //   city:'',
    //   zip:'',
    //   occupation:'',
    //   company:'',
    //   gotram:'',
    //   image:''
    // }
  

  onSelect(countryid: any) {
    this.states = this.selectService.getStates().filter((item) => item.countryid == countryid);
  }

  onSubmit(){

    if(this.user.authorities[0].authority=='ADMIN'){

      console.log(this.user);
      this.update.updateUser(this.user).subscribe((data:any) =>{
      console.log(data)
      Swal.fire('User Updated SuccessFully !!', 'User name is ' + data.firstName, 'success');
      this.router.navigate(['/admin']);
      
  }, 
  error=>{
    console.log(error)
    this.snack.open(error.error.text, 'Some thing Went wrong!!!!!!!', {
      duration: 3000,
    });
  })

    }else{

      console.log(this.user);
      this.update.updateUser(this.user).subscribe((data:any) =>{
      console.log(data)
      Swal.fire('User Updated SuccessFully !!', 'User name is ' + data.firstName, 'success');
      this.router.navigate(['/user']);
      
  }, 
  error=>{
    console.log(error)
    this.snack.open(error.error.text, 'Some thing Went wrong!!!!!!!', {
      duration: 3000,
    });
  })

    }
      
  }

}
