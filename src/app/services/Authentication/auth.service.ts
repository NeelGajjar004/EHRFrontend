import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userInfo : any = [];
  private baseUrl:string = "https://localhost:7084/api/";
  constructor(private http : HttpClient) { }

  signUp(userObj:any){
    let objData : any = {
      UserName : userObj.username,
      UserEmail : userObj.email,
      UserPasword : userObj.password
    }
    return this.http.post<any>(`${this.baseUrl}UsersTb/register`,objData)
    .pipe(
      map((response : Response) => response),
      catchError(this.errorHandler)
    )
  }

  login(loginObj:any){
    let objData : any = {
      UserName : loginObj.username,
      UserEmail : loginObj.email,
      UserPasword : loginObj.password
    }
    // console.log(objData);
    this.userInfo = objData;
    return this.http.post<any>(`${this.baseUrl}UsersTb/authenticate`,objData)
    .pipe(
      map(user => {
        let authUser = CryptoJS.AES.encrypt(JSON.stringify(user.data),"SecretLoginKey");
        localStorage.setItem('SecretMiddlewareKey',authUser.toString());
        return user;
      }),
      )
    }

  errorHandler(error : Response)
  {
    return throwError(error);
  }
  

}

