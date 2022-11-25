import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() price: number = 0;
  @Input() name: string = '';
  @Input() image: string = './../../../../assets/place-holde.jpg';
  @Output() cardButtonClicked: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  addToCart() { 
    this.cardButtonClicked.emit();
  }
}
