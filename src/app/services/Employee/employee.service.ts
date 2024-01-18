import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl : string = "https://localhost:7084/api/";

  constructor(private http:HttpClient) { }

  showEmployee(){
    let EmpData :any = { }
    return this.http.post<any>(`${this.baseUrl}Employees/GetEmployeeList`,EmpData)
    .pipe(
      map((response : Response) => response),
      catchError(this.errorHandler)
      )
  }


  deleteEmployee(id:any){
    return this.http.delete<any>(`${this.baseUrl}Employees/${id}`)
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
