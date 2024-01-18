import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DesignationService } from '../../services/Designation/designation.service';
import { ToastrService } from 'ngx-toastr';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss']
})
export class DesignationComponent implements OnInit{
  
  designForm!:FormGroup;
  UserDetails : any = [];  
  public DesignationList:any;
  public ButtonTitle : string = "";
  
  constructor(
    private fb:FormBuilder,
    private designS:DesignationService,
    private router:Router,
    private toastr:ToastrService
  ){  }

  ngOnInit():void{
    var secureItem = localStorage.getItem('SecretMiddlewareKey');
    this.UserDetails = secureItem ? JSON.parse(CryptoJS.AES.decrypt(secureItem,"SecretLoginKey").toString(CryptoJS.enc.Utf8)) : null;
    if(this.UserDetails == undefined || this.UserDetails == null)
    {
      this.router.navigate(['/']);
    }
    this.designationForm();
    this.designShow();
  }
  
  designationForm(){
    this.designForm = this.fb.group({
      designationId : 0,
      designName:['',Validators.required],
      designCode:['',Validators.required]
    })
  }

  // editdesignationForm(){
  //   this.designForm = this.fb.group({
  //     designationId : this.DesignationList.designationID,
  //     designName:['',Validators.required],
  //     designCode:['',Validators.required]
  //   })
  // }

  //Designation Dialog Box
  public opened = false;
  public closeDesignation(): void {
    this.opened = false;
  }
  public openDesignation(): void {
    this.designationForm();
    this.ButtonTitle = "Add";
    this.opened = true;
  }

  //Designation Delete Dialog Box
  public openedDel = false;
  public DeleteDesignID:any;
  public closeDelete(): void {
    this.openedDel = false;
  }
  public openDelete(id:any): void {
    this.DeleteDesignID = id;
    this.openedDel = true;
  }
  
  //Designation Edit Dialog Box
  // public openedEdit = false;
  // public EditDesignID:any;
  // public closeEdit(): void {
  //   this.openedEdit = false;
  // }
  // public openEdit(id:any): void {
  //   this.EditDesignID = id;
  //   this.openedEdit = true;
  // }

 
 //*******CRUD Operation*******
  //Display Designation
  designShow(){
    this.designS.showDesign()
    .subscribe(
      data=>{
        // console.log(data);
        this.DesignationList = data;
      }
    )
  }

  //Create Designation
  ondesignAdd(){
    if(this.designForm.valid)
    {
      console.log(this.designForm.value);

      this.designS.addDesign(this.designForm.value)
      .subscribe(
        (data:any)=>{
          if(data['success'] == true)
          {
          console.log(data);
          this.toastr.success(data['message']);
          this.designShow();
          }
          else{
            this.toastr.error(data['message']);
          }
        }
      )
      
      this.designForm.reset();
      this.closeDesignation();
      // this.router.navigate(['designation']);
    }
    else{
      //throw error using toaster and with required fields
      // ValidateForm.validateAllFormFields(this.loginForm);
      this.toastr.error("Somthing when wrong");
      // this.toastr.error();
      //alert("Your form is invalid");
    }
  }

  //Update Designation
  editDesignation(DesignationId: number) {
    console.log(DesignationId);
  
  var objlist = this.DesignationList.find((x: { designationId: number; })=> x.designationId == DesignationId);
  console.log(objlist);
  if(objlist != null)
  {
    this.designForm.patchValue({
      designationId:objlist.designationId,
      designName: objlist.designationName,
      designCode:objlist.designationCode,
    });
  }
  this.ButtonTitle = "Update";
  this.opened = true;
  
  }

  //Delete Designation
  deleteDesignation(DesignationId: any){
    console.log(DesignationId);
    if(DesignationId != null)
    {
      this.designS.delDesign(DesignationId)
      .subscribe(
        data=>{
          this.designShow();
        }
      )
      this.toastr.success("Designation Deleted Successfully");
    }else{
      this.toastr.error("Somthing when wrong");
    }
    this.closeDelete();
  }


}
