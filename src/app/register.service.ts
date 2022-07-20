import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl='http://localhost:8080';

  constructor(private httpClient:HttpClient) { }

  saveUser(user:any){

    return this.httpClient.post(`${this.baseUrl}/user/`,user)
  }

  updateUser(user:any){
    console.log(user);
    console.log(user.authorities);
    delete user.authorities;
    //user=  user.splice('authorities',1);
    console.log(user);
  //  user={};
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}/user/userUpdate`,user)
  }

  createMatrimonyProfile(matrimony:any,username:any){
    return this.httpClient.post(`${this.baseUrl}/user/createMatrimonyProfile/`+username,matrimony)
  }

  updatePassword(changePwd:any, username:any){
    return this.httpClient.post(`${this.baseUrl}/user/changePwd/`+username,changePwd)

  }

  

}
