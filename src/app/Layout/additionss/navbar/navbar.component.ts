import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
isLogin:boolean=false
cartNumber:any;
constructor(private _auth:AuthService,private _router:Router,private  _cart:CartService){

}
ngOnInit():void{
  this._cart.cartNumber.subscribe(()=>{
    next:(response: any)=>{this.cartNumber=response
    }}
  )
  this._auth.userData.subscribe(()=>{
    if(this._auth.userData.getValue()===null){
      this.isLogin=false;
    }else{
      this.isLogin=true;
    }
  }
  )

}
logOut(){
  localStorage.removeItem('userToken');
  this._router.navigate(['/login'])
  this._auth.userData.next(null)
}

}
