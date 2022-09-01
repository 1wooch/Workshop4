import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  username: String;
  role: String;
  valid: boolean;
  groupAdminRole: boolean;
}

export interface Group {
  name: String;
  channels: String;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  login(inputUsername: string, inputPassword: string){
    return this.http.post<User>(this.url + "/api/login", {inputUsername, inputPassword})
    
  }

  adduser(inputUsername: String, inputRole: String, inputEmail: String, inputPassword: String){
    return this.http.post(this.url + "/api/adduser", {inputUsername, inputRole, inputEmail, inputPassword})
  }

  
}