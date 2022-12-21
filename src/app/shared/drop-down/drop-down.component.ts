import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit, OnChanges {

  @Input() quantity = 0;
  @Input() limitList = 0;
  @Output() selection: EventEmitter<number> = new EventEmitter<number>();
  list: number[] = [];


  ngOnInit(): void {
    this.list = this.updateList(this.limitList);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.quantity = changes['quantity'].currentValue;
  }

  updateList(lim: number): number[] {
    const arr = [];
    for(let i = lim; i >= 0; i--) {
      arr.push(i);
    }
    return arr;
  }

  public emitSelection(event: Event) {
    this.selection.emit(parseInt((<HTMLInputElement>event.target).value));
  }

}
