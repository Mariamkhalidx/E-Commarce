import { Injectable } from '@angular/core';
import { Environment } from '../../Base/Environment';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private _http:HttpClient) { }
  getBrand():Observable<any>{
    return this._http.get(`${Environment.baseUrl}/brands`)
  } 

  getSpacificBrand(id:string):Observable<any>{
    return this._http.get(`${Environment.baseUrl}/brands/${id}`)
  } 
}
