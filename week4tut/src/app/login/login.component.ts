import { Component,ViewChild, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};


import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import {Userpwd} from '../userpwd';
import {Userobj} from '../userobj';
import {USERPWDS} from '../mock-users';




const BACKEND_URL='https://localhost:4200';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})





export class LoginComponent implements OnInit {
  userpwd:Userpwd={username:'wonwoo@griffith.edu.au',pwd:'1106'};
  userobj:Userobj={userid:1,username:this.userpwd.username,userbirthday:null,userage:100};
  constructor(private router:Router,private httpClient:HttpClient){}
  ngOnInit(){}
  public loginfunc(){
    this.httpClient.post(BACKEND_URL+'/login',this.userpwd,httpOptions)
    .subscribe((data:any)=>{
      alert(JSON.stringify(this.userpwd));
      if(data.ok){
        sessionStorage.setItem('userid',this.userobj.userid.toString());
        sessionStorage.setItem('username',this.userobj.username);
        sessionStorage.setItem('userbirthdate',this.userobj.userbirthdate);
        sessionStorage.setItem('userage',this.userobj.userage.toString());
        this.httpClient.post<Userobj[]>(BACKEND_URL+'/loginafter',this.userobj,httpOptions)
        .subscribe((m:any)=>{console.log(m[0]);});
        this.router.navigateByUrl('account');
      }else{
        alert('Sorry username or password is wrong');
      }
    });
  }
}
//   username="";
//   password="";
//   Userlist=[{id:"wonwoo@edu.au",user_password:"991106"},{id:"test@edu.au",user_password:"1111"},{id:"test2@edu.au",user_password:"2222"}];
//   //Userlist=new Dictionary();

//   constructor(private route :Router) { }

//   ngOnInit(): void {
//   }
//   itemClicked(){
//     //alert("Hi");
//     //alert(this.username);
//     //alert(this.password);
//     for (let i=0; i<this.Userlist.length; i++){
//       if(this.Userlist[i]['id']==this.username){
//       //alert(this.Userlist[i]['id']);
//       //alert(true);
//           if(this.Userlist[i]['user_password']==this.password){
//             alert("Login Successful");
//             this.route.navigateByUrl('/account');
//             break;
//           }
//           else{
//             alert("Wrong Password");
//             break;
//           }
//       }
//       else{
//         alert(
//           "Check the ID and Password"
//         );
//       }
//     }
//   }

// }
