import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environment } from '../../Base/Environment'; // Ensure this has your API URL

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
    'Content-Type': 'application/json'
  });

  constructor(private _http: HttpClient) {}

  // Method to create a COD order
  createCodOrder(cartId: string, shippingAddress: any): Observable<any> {
    const body = {
      cartId,
      shippingAddress,
    };

    return this._http.post(`${Environment.baseUrl}/orders`, body, { headers: this.headers });
  }

  // Method to create an online payment checkout session
  createCheckoutSession(cartId: string): Observable<any> {
    return this._http.post(`${Environment.baseUrl}/orders/checkout-session/${cartId}`, {}, { headers: this.headers });
  }
}
