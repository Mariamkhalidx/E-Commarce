import { Component } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { Category } from '../../../shared/interface/category';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categoryslider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './categoryslider.component.html',
  styleUrl: './categoryslider.component.scss'
})
export class CategorysliderComponent {
  customOptions: OwlOptions = {
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
  categoryList:Category[]=[];

  constructor(private  _category:CategoryService){

  }
  ngOnInit():void{
    this.getAllCategory()
  }
  getAllCategory(){
    this._category.getCategory().subscribe({
      next:(response)=>{console.log(response.data)
        this.categoryList=response.data

      },
      error:()=>{}
    })
  
    }
}
