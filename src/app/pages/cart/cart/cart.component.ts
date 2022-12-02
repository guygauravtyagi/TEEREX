import { Component } from '@angular/core';
import { CartItem } from 'src/app/data-models/cart-data-models';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public cartItems: CartItem[] = [];
  public cartTotal = 0;

  constructor(private storageService: StorageService) {
    this.cartItems = this.storageService.getCart();
    this.calculateTotal(this.cartItems);
  }

  calculateTotal(cartItems: CartItem[]) {
    this.cartTotal = 0;
    cartItems.forEach(item => {
      this.cartTotal = this.cartTotal + item.product.price * item.quantity;
    });
  }

  updateQty(event: number, cartItem: CartItem) {
    let index = -1;
    this.cartItems.map((item, i) => {
      if (item.product.id === cartItem.product.id) {
        item.quantity = event;
        if (event === 0) index = i;
      }
    });
    if(index !== -1) this.cartItems.splice(index, 1);
    this.storageService.updateCart(this.cartItems, undefined);
    this.calculateTotal(this.cartItems);
  }

}
