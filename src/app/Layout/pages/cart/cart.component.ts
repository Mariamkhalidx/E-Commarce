import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { Data, Product } from '../../../shared/interface/cartproduct';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit  {
  cartItem!:Data;
  productList:Product[]=[];

  constructor(private  _cart:CartService){

  }
  ngOnInit():void{
    this.getproductC()
  }
  getproductC(){
    this._cart.getAddedProductC().subscribe({
      next:(response)=>{console.log(response)
        this._cart.cartNumber.next(response.numOfCartItems)

        this.cartItem=response.data;
this.productList=response.data.products;
      },
    })
  }

  updateCart(prductId:string,count:number){
    if(count==0){
      this.deleteitemCart(prductId)
    }
    this._cart.updateAddedProductC(prductId,count).subscribe({
      next:(response)=>{console.log(response)
        this._cart.cartNumber.next(response.numOfCartItems)

        this.cartItem=response.data;
        this.productList=response.data.products;
      },
    })
  }
  deleteitemCart(prductId:string){
    this._cart.deleteAddedProductC(prductId,).subscribe({

      next:(response)=>{console.log(response)
        this._cart.cartNumber.next(response.numOfCartItems)
        this.cartItem=response.data;
        this.productList=response.data.products;
   
      },
    })
  }
}
