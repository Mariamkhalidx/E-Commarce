import { Category } from './../../../shared/interface/details';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../shared/services/category.service';
import { CategoryDetails } from '../../../shared/interface/details';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.scss'
})
export class CategoryDetailsComponent {

  id!:string;
  CategoryData!: CategoryDetails;
  catList:CategoryDetails[]=[];

constructor(private _router:ActivatedRoute,private _category:CategoryService){

}
ngOnInit():void{
  this._router.params.subscribe((p)=>{
    this.id=p['id']
    console.log(this.id)
  })
  this.getCategory()
}
getCategory(){
  this._category.getSpacificCategory(this.id).subscribe((res)=>{
console.log('Category',res)
this.CategoryData=res.data
 } )
}
}
