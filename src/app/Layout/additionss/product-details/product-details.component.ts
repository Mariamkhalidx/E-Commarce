import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/interface/product';
import { Details } from '../../../shared/interface/details';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../../shared/services/cart.service';
import { WishlistService } from '../../../shared/services/wishlist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CarouselModule ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  customOptions: OwlOptions = {
    items: 1,       // Show one item at a time

    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

id!:string;
  productData!: Details;
constructor(private _router:ActivatedRoute,private _product:ProductService,private _cart:CartService,private _wishlist:WishlistService,private _toaster:ToastrService){

}
ngOnInit():void{
  this._router.params.subscribe((p)=>{
    this.id=p['id']
    console.log(this.id)
  })
  this.getProduct()
}
getProduct(){
  this._product.getSpacificProductt(this.id).subscribe((res)=>{
console.log('product',res)
this.productData=res.data
 } )
}
addProductC(productId:string){
  this._cart.addProductC(productId).subscribe({
    next:(response)=>{console.log(response)
      this._toaster.success(response.message)


    },
    error:()=>{}
  })
}
addProductToWishlist(productId:string){
  this._wishlist.addProductToWishlist(productId).subscribe({
    next:(response)=>{console.log(response)
      this._cart.cartNumber.next(response.numOfCartItems)

      this._toaster.success(response.message)


    },
    error:()=>{}
  })
}
}
