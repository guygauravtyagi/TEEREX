import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { EmptyProductComponent } from './empty-product/empty-product.component';



@NgModule({
  declarations: [
    EmptyCartComponent,
    EmptyProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmptyCartComponent,
    EmptyProductComponent
  ]
})
export class EmptyModule { }
