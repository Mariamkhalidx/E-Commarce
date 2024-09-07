import { Brand } from './../../../shared/interface/details';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from '../../../shared/services/brand.service';
import { BrandDetails } from '../../../shared/interface/details';

@Component({
  selector: 'app-brand-details',
  standalone: true,
  imports: [],
  templateUrl: './brand-details.component.html',
  styleUrl: './brand-details.component.scss'
})
export class BrandDetailsComponent {

  id!:string;
  BrandData!: BrandDetails;
constructor(private _router:ActivatedRoute,private _brand:BrandService){

}
ngOnInit():void{
  this._router.params.subscribe((p)=>{
    this.id=p['id']
    console.log(this.id)
  })
  this.getBrand()
}
getBrand(){
  this._brand.  getSpacificBrand(this.id).subscribe((res)=>{
console.log('Brand',res)
this.BrandData=res.data
 } )
}
}