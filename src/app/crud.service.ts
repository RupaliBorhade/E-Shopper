import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url="http://localhost:4900/";
  constructor(private http:Http) { }
     insertData=function(){}

     selectData=function(path){

       return this.http.get(this.url+path).pipe(
       	map(
       		 (response)=>{
       		 	return response.json();
       		 }
       		)
       	);
     }

     updateData=function(){}

     deleteData=function(){}


  
}
