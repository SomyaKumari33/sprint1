import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Login } from 'src/app/login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "https://localhost:44319/api/booking";

  constructor(private http:HttpClient) { }

  DisplayAll(){
    return this.http.get("https://localhost:44319/api/booking");
  }
  

  Update_house(emp:Login):Observable<Login>
  {
    let httpheaders=new HttpHeaders().set('Content-Type','application/json');
    let options={headers:httpheaders}
    return this.http.post<Login>(this.url,emp,options);
  }
}