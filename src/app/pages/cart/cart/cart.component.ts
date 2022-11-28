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

  constructor(private storageService: StorageService) {
    this.cartItems = this.storageService.getCart();
    console.log(this.cartItems);
  }

}
