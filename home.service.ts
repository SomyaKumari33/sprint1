import { Injectable } from '@angular/core';
import {Home} from 'src/app/home';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {Login} from 'src/app/login';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url = "https://localhost:44319/api/booking";

  constructor(private http:HttpClient) { }
  
  DisplayAll(){
    return this.http.get("https://localhost:44319/api/booking");
  }

  
}
