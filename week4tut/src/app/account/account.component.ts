import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userid=sessionStorage.getItem('userid');
  username=sessionStorage.getItem('username');
  birthdate=sessionStorage.getItem('userbirthdate');
  userage=sessionStorage.getItem('userage');
  
  constructor() { }

  ngOnInit(){
  }

}
