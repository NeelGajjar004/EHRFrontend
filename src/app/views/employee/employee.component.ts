import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

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