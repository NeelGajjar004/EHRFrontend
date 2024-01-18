import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseUrl : string = "https://localhost:7084/api/";
  constructor(private http:HttpClient) {

  }

  //Show Department List
  showDepartment(){
    let deptData :any = { }
    return this.http.post<any>(`${this.baseUrl}Departments/GetDepartmentList`,deptData)
    .pipe(
      map((response : Response) => response),
      catchError(this.errorHandler)
      )
    }
    
  //Create & Edit Department List
  addDepartment(deptObj:any){
    let deptData : any = {
      departmentId : deptObj.departmentId,
      departmentName : deptObj.deptName,
      departmentCode : deptObj.deptCode
    }
    return this.http.post<any>(`${this.baseUrl}Departments`,deptData)
    .pipe(
      map((response : Response) => response),
      catchError(this.errorHandler)
    )
  }

  deleteDepartment(id:any){
    return this.http.delete<any>(`${this.baseUrl}Departments/${id}`)
    .pipe(
      map((response : Response) => response),
      catchError(this.errorHandler)
    )
  }

  errorHandler(error : Response)
  {
    return throwError(error);
  }

}
