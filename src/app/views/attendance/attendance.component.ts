import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit{

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
