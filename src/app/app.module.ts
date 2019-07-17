import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterComponent } from './product/product-filter/product-filter.component';
import { ProductCategoryComponent } from './product/product-category/product-category.component';
import { PopularCategoryComponent } from './product/product-category/popular-category/popular-category.component';
import { ProductlistComponent } from './product/product-category/productlist/productlist.component';
import { ProductItemComponent } from './product/product-category/productlist/product-item/product-item.component';
import { ProductService } from './product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductFilterComponent,
    ProductCategoryComponent,
    PopularCategoryComponent,
    ProductlistComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
