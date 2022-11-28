import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CartDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CartDetailsComponent
  ]
})
export class CartDetailsModule { }
