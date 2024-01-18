import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from '../../services/Authentication/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  type:string = "password";
  isText:boolean = false;
  eyeIcon:string = "fa-eye-slash";
  signupForm! : FormGroup;

  constructor(private fb:FormBuilder,
    private auth:AuthService,
    private router : Router,
    private toastr: ToastrService){}

  ngOnInit():void{
    this.CreateForm();
  }

  CreateForm()
  {
    this.signupForm = this.fb.group({
      username:['',Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)
      ])],
      email:['',Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password:['',Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])],
      confirm_password:['',Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
      ])],
    })
  }
   
  
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
  
  pwdmiss:string = '';
  wrgemail:string = '';
  onsignUp(){
    if(!this.signupForm.controls['email'].invalid)
    {
      this.wrgemail = '';
      if(this.signupForm.value.password == this.signupForm.value.confirm_password)
      {
        this.pwdmiss = '';
        if(this.signupForm.valid)
        {
          console.log(this.signupForm.value);
          
          //send the obj to database
          this.auth.signUp(this.signupForm.value)
          .subscribe(
            (data:any)=>{
              if(data['success'] == true)
              {
                console.log(data);
                this.toastr.success(data['message']);
                this.signupForm.reset();
                this.router.navigate(['']);
              }
              else{
                this.toastr.error(data['message']);
              }
            }
          )
            
          }else{
            //throw error using toaster and with required fields
            ValidateForm.validateAllFormFields(this.signupForm);
            // alert("Data is Invalid")
          }
      }
      else{
        // this.toastr.success('Password and Confirm Password must be match!', 'Error');
        this.pwdmiss = '*Password and Confirm Password must be match!';
      }
    }else{
        this.wrgemail = '*Invalid Email Address';
    }
  }

}
