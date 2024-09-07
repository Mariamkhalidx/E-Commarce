import { Injectable } from '@angular/core';
import { Environment } from '../../Base/Environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }
  getCategory():Observable<any>{
    return this._http.get(`${Environment.baseUrl}/categories`)
  } 
  getSpacificCategory(id:string):Observable<any>{
    return this._http.get(`${Environment.baseUrl}/categories/${id}`)
  } 
}
