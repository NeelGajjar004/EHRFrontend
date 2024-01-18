import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {

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

  activeTab: number = 1; // Initially set the first button as active

  toggleTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

}
