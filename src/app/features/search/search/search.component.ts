import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searched: EventEmitter<Event> = new EventEmitter<Event>();


  public textChanged(event: Event) {
    this.searched.emit(event);
  }
}
