import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { CardModule, FilterMenuModule, SearchModule } from 'src/app/features';
import { UtilsModule } from 'src/app/utils/utils.module';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CardModule,
    FilterMenuModule,
    SearchModule,
    UtilsModule,
  ]
})
export class ProductsModule { }
