import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() value = 'Button';
  @Input() className = 'button-solid';
  @Output() clickButton: EventEmitter<Event> = new EventEmitter();

  public buttonClicked(event: Event) {
    this.clickButton.emit(event);
  }
}
