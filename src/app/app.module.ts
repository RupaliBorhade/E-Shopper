import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {CrudService} from './crud.service';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { BrandsComponent } from './brands/brands.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddbrandComponent } from './addbrand/addbrand.component';

const appRoutes: Routes=[

   {path:'', component:ProductsComponent},
   {path:'category', component:AddcategoryComponent},
   {path:'brand' , component:AddbrandComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    BrandsComponent,
    HeaderComponent,
    SliderComponent,
    ProductsComponent,
    FooterComponent,
    AddcategoryComponent,
    AddbrandComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
