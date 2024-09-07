import { Component } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { Category } from '../../../shared/interface/category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
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
