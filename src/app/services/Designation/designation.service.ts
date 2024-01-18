import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  private baseUrl : string = "https://localhost:7084/api/";
  constructor(private http:HttpClient) {

  }

  //Show Designation List
  showDesign(){
    let objData : any = {      
    }
    return this.http.post<any>(`${this.baseUrl}Designations/GetDesignationsList`,objData)
    .pipe(
      map((response : Response) => response),
      catchError(this.errorHandler)
    )
  }



  //Craete & Edit Designation
  addDesign(designObj:any){
    let objData : any = {
      designationId : designObj.designationId,
      designationName : designObj.designName,
      designationCode : designObj.designCode
    }
    return this.http.post<any>(`${this.baseUrl}Designations`,objData)
    .pipe(
      map((response : Response) => response),
      catchError(this.errorHandler)
    )
  }



  //Delete Designation
  delDesign(id:any){
    return this.http.delete<any>(`${this.baseUrl}Designations/${id}`)
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
