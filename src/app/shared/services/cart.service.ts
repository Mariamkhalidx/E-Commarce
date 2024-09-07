import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Environment } from '../../Base/Environment';
import { platform } from 'process';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartNumber= new BehaviorSubject(0);
  constructor(private _http:HttpClient) { 

  


  }
  ngOnInit(): void
  {
    this.getAddedProductC().subscribe({
      next:(response)=>{this.cartNumber.next(response.numOfCartItems)
      },
    })
  }
  addProductC(id:string):Observable<any>{
    return this._http.post(`${Environment.baseUrl}/cart`,
      {
         productId:id
      },
      {
        headers:{
          token:localStorage.getItem('userToken')!
        }
      }

    );

  }
  getAddedProductC():Observable<any>{
return this._http.get(`${Environment.baseUrl}/cart`
  ,
      {
        headers:{
    token:localStorage.getItem('userToken')!
  }
      }
)
  }
  updateAddedProductC(id:string,count:number):Observable<any>{
    return this._http.put(`${Environment.baseUrl}/cart/${id}`,
      {
        count:count
      },
      {
        headers:{
    token:localStorage.getItem('userToken')!
  }
      }

    );

  }
  deleteAddedProductC(id:string):Observable<any>{
    return this._http.delete(`${Environment.baseUrl}/cart/${id}`,
   
      {
        headers:{
    token:localStorage.getItem('userToken')!
  }
      }

    );

  }
  clearAddedProductC(id:string):Observable<any>{
    return this._http.delete(`${Environment.baseUrl}/cart/${id}`,
   
      {
        headers:{
    token:localStorage.getItem('userToken')!
  }
      }

    );

  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

