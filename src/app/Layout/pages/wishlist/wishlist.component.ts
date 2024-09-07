import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../../shared/services/wishlist.service';
import { Data, Product } from '../../../shared/interface/wishproduct';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [],
  templateUrl: './wishlist.component.html',
})
export class WishlistComponent implements OnInit {
  wishlistItem!: Data;
  productList: Product[] = [];

  constructor(private _wishlist: WishlistService) {}

  ngOnInit(): void {
    this.getWishlistProducts();
  }

  getWishlistProducts(): void {
    this._wishlist.getWishlistProducts().subscribe({
      next: (response) => {
        console.log('Wishlist Response:', response); // Log the response here
        this.wishlistItem = response.data;
        this.productList = response.data.products; // Check this assignment
      },
      error: (err) => {
        console.error('Error fetching wishlist:', err);
      }
    });
  }

  removeProduct(productId: string): void {
    this._wishlist.deleteProductFromWishlist(productId).subscribe(() => {
      this.productList = this.productList.filter(item => item._id !== productId);
    });
  }
}

