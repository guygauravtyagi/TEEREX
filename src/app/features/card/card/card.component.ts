import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() price = 0;
  @Input() name = '';
  @Input() image = './../../../../assets/place-holder.jpg';
  @Output() cardButtonClicked: EventEmitter<string> = new EventEmitter();

  addToCart() { 
    this.cardButtonClicked.emit();
  }
}
