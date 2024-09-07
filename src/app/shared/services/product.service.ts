import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../Base/Environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }
  getProduct():Observable<any>{
    return this._http.get(`${Environment.baseUrl}/products`)
  } 
  getSpacificProductt(id:string):Observable<any>{
    return this._http.get(`${Environment.baseUrl}/products/${id}`)
  } 
}
