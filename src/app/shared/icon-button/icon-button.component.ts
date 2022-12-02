import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent {

  @Input() image = './../../../assets/cart-icon.png';
  @Input() isActive = false;

}
