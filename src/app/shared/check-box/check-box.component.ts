import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent {

  @Input() label: string = '';
  @Input() isChecked: boolean = false;
  @Input() value: string = '';
  @Output() isChanged: EventEmitter<any> = new EventEmitter<any>()


  boxToggled(isChecked: boolean) {
    this.isChecked = isChecked;
    this.isChanged.emit({
      isChecked: isChecked,
      value: this.value
    });
  }

}
