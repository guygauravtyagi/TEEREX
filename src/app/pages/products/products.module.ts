import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { CardModule, FilterMenuModule, SearchModule } from 'src/app/features';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CardModule,
    FilterMenuModule,
    SearchModule
  ]
})
export class ProductsModule { }
