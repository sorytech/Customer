import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
private Url : string;

  constructor(private http: HttpClient) { 
    this.Url="assets/customers.json"
  }

  public getCustomers() : Observable<Customer[]>{
    return this.http.get<Customer[]>(this.Url);
   }
}
