import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  Url="https://localhost:44319/api/payment";
  constructor(private http:HttpClient) { }

  DisplayAll(){
    return this.http.get("https://localhost:44319/api/payment");
  }

   submit(pro:Payment):Observable<Payment>
  {
    let httpheaders=new HttpHeaders().set('Content-Type','application/json');
    let options={headers:httpheaders}
    return this.http.post<Payment>(this.Url, pro,options);
  }
}
