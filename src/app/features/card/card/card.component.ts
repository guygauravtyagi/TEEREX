import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() price: number = 0;
  @Input() image: string = './../../../../assets/place-holde.jpg';
  @Output() cardClicked: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  increment() { }
}
