import { Component } from '@angular/core';
import { BrandService } from '../../../shared/services/brand.service';
import { Brand } from '../../../shared/interface/brand';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {
  brandList:Brand[]=[];

  constructor(private  _brand:BrandService){

  }
  ngOnInit():void{
    this.getAllBrands()
  }
  getAllBrands(){
    this._brand.getBrand().subscribe({
      next:(response)=>{console.log(response.data)
        this.brandList=response.data

      },
      error:()=>{}
    })
  
    }
}
