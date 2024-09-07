import { Component } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/interface/product';
import { NavbarComponent } from "../../additionss/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { MainsliderComponent } from "../../additionss/mainslider/mainslider.component";
import { CategorysliderComponent } from "../../additionss/categoryslider/categoryslider.component";
import { CartService } from '../../../shared/services/cart.service';
import { WishlistService } from '../../../shared/services/wishlist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, RouterLink, CarouselModule, MainsliderComponent, CategorysliderComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  productList:Product[]=[];
constructor(private  _product:ProductService,private _cart:CartService,private _wishlist:WishlistService,private _toaster:ToastrService){

}
ngOnInit():void{
  this.getAllProduct()
}
getAllProduct(){
  this._product.getProduct().subscribe({
    next:(response)=>{console.log(response.data)
      this.productList=response.data

    },
    error:()=>{}
  })

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



