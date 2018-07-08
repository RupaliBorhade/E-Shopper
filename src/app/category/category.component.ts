import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

   public results;

  constructor(private crud:CrudService) { }
    public categorydata;

  ngOnInit() {
   /* this.http.get("http://localhost:4800/category").subscribe(
    (response)=>{
      this.results=response.json();
      console.log(this.results);
    }
    );
     */
         this.crud.selectData("category").subscribe(
         	(results)=>{
         		// console.log(results);
         		this.categorydata=results;
         	}
         	);

  }

}
