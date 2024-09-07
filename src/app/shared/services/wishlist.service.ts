import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../../Base/Environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  header: any = {
    token: localStorage.getItem('userToken')
  };

  constructor(private _http: HttpClient) { }

  // Add product to wishlist
  addProductToWishlist(id: string): Observable<any> {
    return this._http.post(`${Environment.baseUrl}/wishlist`, 
      { productId: id }, 
      { headers: this.header }
    );
  }

  // Get products in the wishlist
  getWishlistProducts(): Observable<any> {
    console.log('Fetching wishlist products...');
    return this._http.get(`${Environment.baseUrl}/wishlist`, { headers: this.header });
  }

  // Remove product from wishlist
  deleteProductFromWishlist(id: string): Observable<any> {
    return this._http.delete(`${Environment.baseUrl}/wishlist/${id}`, { headers: this.header });
  }

  // Clear all products from the wishlist
  clearWishlist(): Observable<any> {
    return this._http.delete(`${Environment.baseUrl}/wishlist`, { headers: this.header });
  }
}
