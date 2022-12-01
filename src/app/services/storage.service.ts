import { EventEmitter, Injectable, Output } from '@angular/core';
import { Product } from '../data-models/product-data-models';
import { CartItem } from '../data-models/cart-data-models';
import { MainService } from './main.service';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private CART_ITEMS = 'CART_ITEMS';
  private PRODUCTS_LIST = 'PRODUCTS_LIST';
  @Output() cartUpdateEvent = new EventEmitter<Product>();

  // create Cart info in session, we can do it here since we need not to make any call for this.
  constructor(private mainService: MainService) {
    if (!sessionStorage.getItem(this.CART_ITEMS) || sessionStorage.getItem(this.CART_ITEMS) === null) sessionStorage.setItem(this.CART_ITEMS, '[]');
  }

  /**
   * 
   * @param product {prdouct}
   * Takes object of Product type to add it in the cart.
   * 
   */
  public addToCart(product: Product) {
    const cart = this.getCart();
    let isPresent = false;
    cart.forEach((element: CartItem) => {
      if (element.product.id === product.id) {
        element.quantity++;
        isPresent = true;
      }
    });
    if (!isPresent) cart.push({
      quantity: 1,
      product: product
    });
    this.updateCart(cart, product);
  }

  /**
   * 
   * @param product 
   * Takes object of Product type to remove from the cart.
   * 
   */
  public removeFromCart(product: Product) {
    const cart = this.getCart();
    let doRemove = false;
    let removeIndex = -1;
    cart.forEach((element: CartItem, index: number) => {
      if (element.product.id === product.id) {
        element.quantity--;
        doRemove = true;
        removeIndex = index;
      }
    });
    if (doRemove && removeIndex !== -1) cart.splice(removeIndex, 1);
    this.updateCart(cart, product);
  }

  /**
   * 
   * @returns carts object from session storage.
   * @type ``CartItem[]``
   * 
   */
  public getCart(): CartItem[] {
    return JSON.parse(<string>sessionStorage.getItem(this.CART_ITEMS));
  }

  /**
   * 
   * @param cart of type CartItem[]
   * @param product of type Product
   * @emits cardUpdateEvent
   * 
   */
  public updateCart(cart: CartItem[], product: Product) {
    sessionStorage.setItem(this.CART_ITEMS, JSON.stringify(cart));
    this.cartUpdateEvent.emit(product);
  }

  /**
   * 
   * @param products of type Product
   * 
   * 
   */
  updateProductList(products: Product[]) {
    sessionStorage.setItem(this.PRODUCTS_LIST, JSON.stringify(products));
  }

  /**
   * 
   * @returns Promise of type Product[]
   * 
   */
  public getProductsList(): Observable<Product[]> {
    return from((async () => {
      if (!sessionStorage.getItem(this.PRODUCTS_LIST) || sessionStorage.getItem(this.PRODUCTS_LIST) === null) {
        const products = await this.mainService.getData();
        sessionStorage.setItem(this.PRODUCTS_LIST, JSON.stringify(products));
      }
      return JSON.parse(<string>sessionStorage.getItem(this.PRODUCTS_LIST));
    })())
  }

  /**
   * 
   * @returns returns event
   * 
   */
  public getCartUpdateEvent(): EventEmitter<Product> {
    return this.cartUpdateEvent;
  }
}
