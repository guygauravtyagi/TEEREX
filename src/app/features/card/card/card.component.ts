import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() price: string = 'Checking..';
  @Output() cardClicked: EventEmitter<any> = new EventEmitter();
}
