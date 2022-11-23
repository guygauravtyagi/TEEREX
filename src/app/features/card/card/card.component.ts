import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './../../../store/cart-store/cart.action';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() price: string = 'Checking..';
  @Output() cardClicked: EventEmitter<any> = new EventEmitter();

  count$: Observable<number>;
  
  constructor(private store: Store<{ payload: number }>) {
    this.count$ = store.select('payload');
  }

  increment() {
    this.store.dispatch(increment());
  }
  
  decrement() {
    this.store.dispatch(decrement());
  }
  
  reset() {
    this.store.dispatch(reset());
  }
}
