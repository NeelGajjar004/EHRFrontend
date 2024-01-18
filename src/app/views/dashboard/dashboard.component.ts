import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';


interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  UserDetails : any = [];  
  
  constructor(private router : Router) {
  }
 
  ngOnInit(): void {
    var secureItem = localStorage.getItem('SecretMiddlewareKey');
    this.UserDetails = secureItem ? JSON.parse(CryptoJS.AES.decrypt(secureItem,"SecretLoginKey").toString(CryptoJS.enc.Utf8)) : null;
    if(this.UserDetails == undefined || this.UserDetails == null)
    {
      this.router.navigate(['/']);
    }
  }

  
}
