import { Component,ViewChild, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

import { LoginService,User } from 'src/login.service';

import{FormBuilder,FormGroup}from "@angular/forms"

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


//import {Userpwd} from '../userpwd.json';
//import {Userobj} from '../../userobj.model';
//import {USERPWDS} from '../mock-users';




const BACKEND_URL='http://localhost:3000';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})




export class LoginComponent implements OnInit{
  form:any={
    username:null,
    password:null
  };


  constructor(private httpClient:HttpClient,private router:Router){}
  ngOnInit(){}
  public loginfunc(){
    const{username,password}=this.form;
    //console.log(username,password)
    this.httpClient.post(BACKEND_URL+'/login',{username:username,pwd:password})
    .subscribe((data:any)=>{
      //console.log(data);
            if(data.ok){
              alert("success");
              //console.log(data.age); //working 22
              //console.log(data.email);
              //console.log(data.birthdate)
              sessionStorage.setItem('username',data.username);
              sessionStorage.setItem('email',data.email);
              sessionStorage.setItem('age',data.age);
              sessionStorage.setItem('role',data.role);
              sessionStorage.setItem('birthdate',data.birthdate);
              sessionStorage.setItem('pwd',data.pwd);
              this.router.navigateByUrl('account');

            }else{
              alert('Sorry username or password is wrong');
            }
          });
  }
}

// export class LoginComponent implements OnInit {
//   userpwd:Userpwd={username:'wonwoo@griffith.edu.au',pwd:'99106'};
//   userobj:Userobj={userid:1,username:this.userpwd.username,userbirthday:Date.prototype.getDay(),userage:100};
//   constructor(private router:Router,private httpClient:HttpClient){}
//   ngOnInit(){}


//   public loginfunc(){
//     this.httpClient.post(BACKEND_URL+'/login',this.userpwd,httpOptions)
//     .subscribe((data:any)=>{
//       alert(JSON.stringify(this.userpwd));
//       if(data.ok){
//         sessionStorage.setItem('userid',this.userobj.userid.toString());
//         sessionStorage.setItem('username',this.userobj.username);
//         sessionStorage.setItem('userbirthdate',this.userobj.userbirthday.toString());
//         sessionStorage.setItem('userage',this.userobj.userage.toString());
//         this.httpClient.post<Userobj[]>(BACKEND_URL+'/loginafter',this.userobj,httpOptions)
//         .subscribe((m:any)=>{console.log(m[0]);});
//         this.router.navigateByUrl('account');
//       }else{
//         alert('Sorry username or password is wrong');
//       }
//     });
//   }
// }



// export class LoginComponent implements OnInit{

//   public loginForm! : FormGroup



//   constructor(private formBuilder:FormBuilder, private http : HttpClient,private router:Router){}

//   ngOnInit(): void {
//     this.loginForm=this.formBuilder.group({
//       email:[''],
//       password:['']
//     })
//   }
//   login(){
//     this.http.get<any>(BACKEND_URL)
//     .subscribe(res=>{
//       console.log(this.loginForm.value.email);
//       const user = res.find((a:any)=>{
//         console.log(a.email);
        
//           return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password 
//       });
//       if(user){
//         alert("Login SUccess");
//         this.loginForm.reset();
//         this.router.navigate(['account'])
//       }else{
//         alert("user not found");
//       }
      
//   },err=>{
//         alert("something went wrong");
//   })
//   }
// }









// export class LoginComponent implements OnInit {
  
//   username:string ='';
//   password:string = '';
//   role: string = '';
//   constructor(private router:Router,private http:HttpClient) { }

//   ngOnInit() {
//     if(sessionStorage.getItem("username") != null){
//       this.router.navigateByUrl('/account')
//     }
//   }

//   public loginUser(): void {
  
//     console.log(this.username);//working
//     console.log(this.password);//working
//     if (this.username === "" && this.password === "") {
//         alert("You must enter an email and a username!");
//         return;
//     } else if (typeof(Storage) !== "undefined") {
//         const req =this.http.post(BACKEND_URL, {
//                 username: this.username,
//                 password: this.password,
//             }).subscribe((data:any)=>{
//                     if (data.success) {
//                         alert("Login Successful!");
//                         this.router.navigateByUrl('/account');
//                         sessionStorage.setItem("username", data.username);
//                         sessionStorage.setItem("password", data.password);
//                         sessionStorage.setItem("role", data.role);
//                     } else {
//                         alert('Username/Email incorrect!')
//                     }
//                 },
//                 err => {
//                     alert('An error has occured trying to create user.')
//                     console.log("Error occured");
//                     return;
//                 });
//     } else {
//         console.log('Local Storage Undefined');
//         alert("Error: Local Storage Undefined!")
//         return;
//     }
// }
// }



// export class LoginComponent implements OnInit {

//   inputUsername:any;
//   inputPassword:any;
  
  


//   constructor(private loginService:LoginService, private router:Router) { }
//   ngOnInit(){}

//   public submitClicked(){
//     this.loginService.login(this.inputUsername,this.inputPassword)
//     .subscribe(data=>{
//       console.log(data);
//       if(data.valid===true){
//         localStorage.setItem('username',JSON.stringify(data.username));
//         localStorage.setItem('role',JSON.stringify(data.role));
//         localStorage.setItem('groupAdminRole',JSON.stringify(data.groupAdminRole));
//         this.router.navigateByUrl('/account');
//         console.log("y");

//       }else if(data.valid===false){
//         console.log( "Password Incorrect");        
//       }else if (data.valid===null){
//         console.log("user not found");

//       }
//     }

//     )
//   }


// }