import { BrandDetailsComponent } from './Layout/additionss/brand-details/brand-details.component';
import { BrandsComponent } from './Layout/pages/brands/brands.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './Layout/pages/home/home.component';
import { CartComponent } from './Layout/pages/cart/cart.component';

import { NotfoundComponent } from './Layout/additionss/notfound/notfound.component';
import { LoginComponent } from './Layout/pages/login/login.component';
import { RegisterComponent } from './Layout/pages/register/register.component';
import { CategoriesComponent } from './Layout/pages/categories/categories.component';
import { authGuard } from './shared/gaurd/auth.guard';
import { ProductsComponent } from './Layout/pages/products/products.component';
import { ProductDetailsComponent } from './Layout/additionss/product-details/product-details.component';
import { CategoryDetailsComponent } from './Layout/additionss/category-details/category-details.component';
import { WishlistComponent } from './Layout/pages/wishlist/wishlist.component';

export const routes: Routes = [

{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent,title:'home',canActivate:[authGuard]},
{path:'cart',component:CartComponent,title:'cart',canActivate:[authGuard]},
{path:'wishlist',component:WishlistComponent,title:'wishlist',canActivate:[authGuard]},

{path:'brands',component:BrandsComponent,title:'brands',canActivate:[authGuard]},
{path:'products',component:ProductsComponent,title:'products',canActivate:[authGuard]},
{path:'ProductDetails/:id',component:ProductDetailsComponent,title:'products',canActivate:[authGuard]},
{path:'brandDetails/:id',component:BrandDetailsComponent,title:'brands',canActivate:[authGuard]},
{path:'categoryDetails/:id',component:CategoryDetailsComponent,title:'categories',canActivate:[authGuard]},

{path:'categories',component:CategoriesComponent,title:'categories',canActivate:[authGuard]},
{path:'login',component:LoginComponent,title:'login'},
{path:'register',component:RegisterComponent,title:'register'},
{path:'**',component:NotfoundComponent},
];
