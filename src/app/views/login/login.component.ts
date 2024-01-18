import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from '../../services/Authentication/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  type:string = "password";
  isText:boolean = false;
  eyeIcon:string = "fa-eye-slash";
  public userInfo:any;

  loginForm! : FormGroup;
  constructor(private fb : FormBuilder, 
    private auth : AuthService,
    private router : Router,
    private toastr: ToastrService ){}

  ngOnInit():void{
   this.login();
  }

  login(){
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onLogin(){
    if(this.loginForm.valid){
      // console.log(this.loginForm.value);
      //send the obj to database
      this.auth.login(this.loginForm.value)
      .subscribe(
        (userdata:any)=>{
          if(userdata['success'] == true)
          {
            this.userInfo = userdata['data'];
            // console.log(this.userInfo);
            this.toastr.success(userdata['message']);
            this.loginForm.reset();
            this.router.navigate(['dashboard']);
          }
          else{
            this.toastr.error(userdata['message']);
          }
          // console.log(this.userInfo);
        }
      )
        
    }
    else{
      //throw error using toaster and with required fields
      ValidateForm.validateAllFormFields(this.loginForm);
      this.toastr.error("Somthing when wrong");
    }
  }  
}


