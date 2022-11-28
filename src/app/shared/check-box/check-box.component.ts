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
  @Input() parentId: number = 0;
  @Output() isChanged: EventEmitter<any> = new EventEmitter<any>();


  boxToggled() {
    this.isChecked = !this.isChecked;
    this.isChanged.emit({
      isChecked: this.isChecked,
      value: this.value,
      parentId: this.parentId,
    });
  }

}
