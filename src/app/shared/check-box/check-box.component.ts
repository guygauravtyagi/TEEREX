import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckBoxEvent } from 'src/app/data-models/filter-data-models';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent {

  @Input() label = '';
  @Input() isChecked = false;
  @Input() value = '';
  @Input() parentId = 0;
  @Output() isChanged: EventEmitter<CheckBoxEvent> = new EventEmitter<CheckBoxEvent>();


  public boxToggled() {
    this.isChecked = !this.isChecked;
    this.isChanged.emit({
      isChecked: this.isChecked,
      value: this.value,
      parentId: this.parentId,
    });
  }

}
