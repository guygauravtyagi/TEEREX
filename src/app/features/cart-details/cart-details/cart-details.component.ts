import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CartItem } from 'src/app/data-models/cart-data-models';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnChanges {

  @Input() cartItem: CartItem | undefined;
  @Output() changeQty: EventEmitter<number> = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    this.cartItem = (<CartItem>changes['cartItem'].currentValue);
  }

  public deleteItem(event: Event) {
    this.changeQty.emit(0);
  }

  public updateSelection(event: number) {
    this.changeQty.emit(event);
  }
}
