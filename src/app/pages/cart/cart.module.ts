import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { CartDetailsModule } from "../../features/cart-details/cart-details.module";
import { EmptyModule } from 'src/app/features';


@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        CommonModule,
        CartRoutingModule,
        CartDetailsModule,
        EmptyModule
    ]
})
export class CartModule { }
