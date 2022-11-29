import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description-pic',
  templateUrl: './description-pic.component.html',
  styleUrls: ['./description-pic.component.css']
})
export class DescriptionPicComponent {

  @Input() image = './../../../assets/place-holder.jpg';
  @Input() name = 'item';
  @Input() price = '0';

}
