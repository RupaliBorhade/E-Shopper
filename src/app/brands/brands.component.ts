import { Component, OnInit } from '@angular/core';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  constructor(private crud:CrudService) { }
   public branddata;
  ngOnInit() {

  this.crud.selectData("brand").subscribe(
         	(results)=>{
         		// console.log(results);
         		this.branddata=results;
         	}
         	);
  }

}
