import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/data-models/cart-data-models';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent {
  @Input() cartItem: CartItem | undefined; 

  deleteItem(event: Event) {
    console.log(event);
  }
}
