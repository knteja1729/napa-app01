import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Country } from './country';
import { SelectService } from './select.service';
import { State } from './state';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  cities: any;

  constructor(private service:RegisterService, private selectService : SelectService, private snack:MatSnackBar, private router:Router) { }

  
  // countryList: Array<any> = [
   
   
  //   { name: 'USA', cities: ['Downers Grove'] },
  //   { name: 'Canada', cities: ['Puebla'] },
  //   { name: 'India', cities: ['Andhra Pradesh','Telangana'] }
   
  // ];
  
  // changeCountry(count:any) {
  //   cities: [];
  //   this.cities = this.countryList.find(con => con.name == count).cities;
  // }


  selectedCountry: Country = new Country(2, 'Brazil');
  countries : Country[] | undefined;
  states: State[] | undefined;
  

  user={
    
    firstName:'',
    lastName:'',
    gender:'',
    username:'',
    password:'',
    phoneNum:'',
    address1:'',
    address2:'',
    country:'',
    state:'',
    city:'',
    zip:'',
    occupation:'',
    company:'',
    gotram:'',
    image:''



  }

  onSubmit(){
      
      this.service.saveUser(this.user).subscribe((data:any) =>{
      console.log(data)
      Swal.fire('Successfully done !!', 'User id is ' + data.id, 'success');
      this.router.navigate(['home']);
      
  }, 
  error=>{
    console.log(error)
    this.snack.open(error.error.text, 'Some thing Went wrong!!!!!!!', {
      duration: 3000,
    });
  })

  }

  ngOnInit() {
    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);
  }

  onSelect(countryid: any) {
    this.states = this.selectService.getStates().filter((item) => item.countryid == countryid);
  }

}
