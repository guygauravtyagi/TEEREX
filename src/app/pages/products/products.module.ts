import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { CardModule, EmptyModule, FilterMenuModule, SearchModule } from 'src/app/features';
import { SharedModule } from 'src/app/shared/shared.module';
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
    SharedModule,
    EmptyModule
  ]
})
export class ProductsModule { }
