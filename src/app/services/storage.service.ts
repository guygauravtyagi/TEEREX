import { EventEmitter, Injectable, Output } from '@angular/core';
import { Product } from '../data-models/product-data-models';
import { Cart } from '../data-models/cart-data-models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private CART_ITEMS = 'CART_ITEMS';
  @Output() cartUpdateEvent = new EventEmitter<Product>();

  constructor() {
    if (localStorage.getItem(this.CART_ITEMS) || localStorage.getItem(this.CART_ITEMS) === null) localStorage.setItem(this.CART_ITEMS, '[]');
  }

  public addToCart(product: Product) {
    let cart = JSON.parse(<string>localStorage.getItem(this.CART_ITEMS));
    let isPresent = false;
    cart.forEach((element: Cart) => {
      if (element.product.id === product.id) {
        element.quantity++;
        isPresent = true;
      }
    });
    if (!isPresent) cart.push({
      quantity: 1,
      product: product
    });
    localStorage.setItem(this.CART_ITEMS, JSON.stringify(cart));
    this.cartUpdateEvent.emit(product);
  }

  public removeFromCart(product: Product) {
    let cart: Cart[] = JSON.parse(<string>localStorage.getItem(this.CART_ITEMS));
    let doRemove = false;
    let removeIndex = -1;
    cart.forEach((element: Cart, index: number) => {
      if (element.product.id === product.id) {
        element.quantity--;
        doRemove = true;
        removeIndex = index;
      }
    });
    if (doRemove && removeIndex !== -1) cart.splice(removeIndex, 1);
    localStorage.setItem(this.CART_ITEMS, cart.toString());
    this.cartUpdateEvent.emit(product);
  }

  public getCartUpdateEvent() {
    return this.cartUpdateEvent;
  }
}
