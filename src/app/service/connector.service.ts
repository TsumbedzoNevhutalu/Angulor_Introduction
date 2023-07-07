import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  constructor(private http: HttpClient ) { 
    
  }

  getProduct(){
    this.http.get('https://fakestoreapi.com/products/').subscribe(res=>{});
      }

}