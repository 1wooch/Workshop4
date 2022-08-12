import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="";
  password="";
  Userlist=[{id:"wonwoo@edu.au",user_password:"991106"},{id:"test@edu.au",user_password:"1111"},{id:"test2@edu.au",user_password:"2222"}];
  //Userlist=new Dictionary();

  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  itemClicked(){
    //alert("Hi");
    //alert(this.username);
    //alert(this.password);
    for (let i=0; i<this.Userlist.length; i++){
      if(this.Userlist[i]['id']==this.username){
      //alert(this.Userlist[i]['id']);
      //alert(true);
          if(this.Userlist[i]['user_password']==this.password){
            alert("Login Successful");
            this.route.navigateByUrl('/account');
            break;
          }
          else{
            alert("Wrong Password");
            break;
          }
      }
      else{
        alert(
          "Check the ID and Password"
        );
      }
    }
  }

}
