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

}
