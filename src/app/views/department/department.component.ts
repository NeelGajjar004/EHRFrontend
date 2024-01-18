import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DepartmentService } from '../../services/Department/department.service';
import { ToastrService } from 'ngx-toastr';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  
  deptForm!:FormGroup;
  UserDetails : any = [];   
  public DepartmentList:any;
  public ButtonTitle : string = "";

  constructor(
    private fb:FormBuilder,
    private deptSer:DepartmentService,
    private router:Router,
    private toastr:ToastrService,
    ) {
    
  }

  ngOnInit():void{
      var secureItem = localStorage.getItem('SecretMiddlewareKey');
      this.UserDetails = secureItem ? JSON.parse(CryptoJS.AES.decrypt(secureItem,"SecretLoginKey").toString(CryptoJS.enc.Utf8)) : null;
      if(this.UserDetails == undefined || this.UserDetails == null)
      {
        this.router.navigate(['/']);
      }
      this.departmentForm();
      this.showDepartment();
    
  }

  departmentForm(){
    this.deptForm = this.fb.group({
      departmentId : 0,
      deptName:['',Validators.required],
      deptCode:['',Validators.required]
    })
  }

  //Deaprtment Dialog Box
  public opened = false;
  public closeDepartment(): void {
    this.opened = false;
  }
  public openDepartment(): void {
    this.departmentForm();
    this.ButtonTitle = "Add";
    this.opened = true;
  }

  //Deaprtment Delete Dialog Box
  public openedDel = false;
  public DeleteDeptID:any;
  public closeDelete(): void {
    this.openedDel = false;
  }
  public openDelete(id:any): void {
    this.DeleteDeptID = id;
    this.openedDel = true;
  }

  //*******CRUD Operation*******
  //Display Designation
  showDepartment(){
    this.deptSer.showDepartment()
    .subscribe(
      data=>{
        // console.log(data);
        this.DepartmentList = data;
      }
    )
  }

  //Create Designation
  addDepartment(){
    if(this.deptForm.valid)
    {
      console.log(this.deptForm.value);

      this.deptSer.addDepartment(this.deptForm.value)
      .subscribe(
        (data:any)=>{
          if(data['success'] == true)
          {
          console.log(data);
          this.toastr.success(data['message']);
          this.showDepartment();
          }
          else{
            this.toastr.error(data['message']);
          }
        }
      )
      
      this.deptForm.reset();
      this.closeDepartment();
      this.showDepartment();
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
  editDepartment(DepartmentId: number){
    console.log(DepartmentId);
  
    var objlist = this.DepartmentList.find((x: { departmentId: number; })=> x.departmentId == DepartmentId);
    console.log(objlist);
    if(objlist != null)
    {
      this.deptForm.patchValue({
        departmentId:objlist.departmentId,
        deptName: objlist.departmentName,
        deptCode:objlist.departmentCode,
      });
    }
    this.ButtonTitle = "Update";
    this.opened = true;
    
    }

  //Delete Designation
  deleteDesignation(DepartmentId: number){
    console.log(DepartmentId);
    if(DepartmentId != null)
    {
      this.deptSer.deleteDepartment(DepartmentId)
      .subscribe(
        data=>{
          this.showDepartment();
        }
      )
      this.toastr.success("Department Deleted Successfully");
    }else{
      this.toastr.error("Somthing when wrong");
    }
    this.closeDelete();
  }

  
}
