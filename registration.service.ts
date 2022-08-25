import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from 'src/app/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  url = "https://localhost:44319/api/customer";

  constructor(private http:HttpClient) { }

  DisplayAll(){
    return this.http.get("https://localhost:44319/api/customer");
  }
  

  RegisterCus(cus:Registration):Observable<Registration>
  {
    let httpheaders=new HttpHeaders().set('Content-Type','application/json');
    let options={headers:httpheaders}
    return this.http.post<Registration>(this.url,cus,options);
  }
}

