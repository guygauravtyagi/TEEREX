import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  @Input() quantity = 0;
  list: number[] = [];


  ngOnInit(): void {
    for(let i = this.quantity; i >= 0; i--) {
      this.list.push(i);
    }
  }

}
