import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { EmployeeService } from '../../../services/Employee/employee.service';
import { DesignationService } from 'src/app/services/Designation/designation.service';
import { DepartmentService } from 'src/app/services/Department/department.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  EmpForm!:FormGroup;
  public EmployeeList:any;
  public DesignationList:any;
  public DepartmentList:any;
  public ButtonTitle : string = "";

  constructor(
    private fb:FormBuilder,
    private empS:EmployeeService,
    private designS:DesignationService,
    private deptS:DepartmentService,
    private router:Router,
    private toastr:ToastrService
  ){  }

  ngOnInit():void{
    this.showEmployee();
    this.employeeForm();
  }

  employeeForm(){
    this.EmpForm = this.fb.group({
      empCode : ['',Validators.required],
      firstName : ['',Validators.required],
      middleName : ['',Validators.required],
      lastName : ['',Validators.required],
      department : ['',Validators.required],
      designation : ['',Validators.required],
    })
  }

  departmentList(){
    this.deptS.showDepartment()
    .subscribe(
      data=>{
        this.DepartmentList = data;
      }
    );
  }

  designationList(){
    this.designS.showDesign()
    .subscribe(
      data=>{
        this.DesignationList = data;
      }
    );
  }

  //Employee Dialog Box
  public opened = false;
  public closeEmployee(): void {
    this.opened = false;
  }
  public openEmployee(): void {
    this.employeeForm();
    this.departmentList();
    this.designationList();
    this.ButtonTitle = "Add";
    this.opened = true;
  }

  //Employee Delete Dialog Box
  public openedDel = false;
  public DeleteEmployeeID:any;
  public closeDelete(): void {
    this.openedDel = false;
  }
  public openDelete(id:any): void {
    this.DeleteEmployeeID = id;
    this.openedDel = true;
  }

  //*******CRUD Operation*******
  //Display Designation
  showEmployee(){
  this.DepartmentList = this.deptS.showDepartment().subscribe();
    this.empS.showEmployee()
    .subscribe(
      data=>{
        // console.log(data);
        this.EmployeeList = data;
      }
    )
  }

  //Create Designation
  addEmployee(){
  //   if(this.designForm.valid)
  //   {
  //     console.log(this.designForm.value);

  //     this.designS.addDesign(this.designForm.value)
  //     .subscribe(
  //       (data:any)=>{
  //         if(data['success'] == true)
  //         {
  //         console.log(data);
  //         this.toastr.success(data['message']);
  //         this.designShow();
  //         }
  //         else{
  //           this.toastr.error(data['message']);
  //         }
  //       }
  //     )
      
  //     this.designForm.reset();
  //     this.closeDesignation();
  //     // this.router.navigate(['designation']);
  //   }
  //   else{
  //     //throw error using toaster and with required fields
  //     // ValidateForm.validateAllFormFields(this.loginForm);
  //     this.toastr.error("Somthing when wrong");
  //     // this.toastr.error();
  //     //alert("Your form is invalid");
  //   }
  }

  //Update Designation
  editEmployee(EmployeeId: number) {
  //   console.log(EmployeeId);
  
  // var objlist = this.DesignationList.find((x: { designationId: number; })=> x.designationId == DesignationId);
  // console.log(objlist);
  // if(objlist != null)
  // {
  //   this.designForm.patchValue({
  //     designationId:objlist.designationId,
  //     designName: objlist.designationName,
  //     designCode:objlist.designationCode,
  //   });
  // }
  // this.ButtonTitle = "Update";
  // this.opened = true;
  
  }

  //Delete Designation
  deleteEmployee(EmployeeId: number){
  //   console.log(EmployeeId);
  //   if(DesignationId != null)
  //   {
  //     this.designS.delDesign(DesignationId)
  //     .subscribe(
  //       data=>{
  //         this.designShow();
  //       }
  //     )
  //     this.toastr.success("Designation Delete Successfully");
  //   }else{
  //     this.toastr.error("Somthing when wrong");
  //   }
  //   this.closeDelete();
  }
}
