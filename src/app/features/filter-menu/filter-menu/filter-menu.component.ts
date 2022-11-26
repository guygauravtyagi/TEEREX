import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent {



  checkBoxTriggered(event: Event) {
    console.log(event);
  }
}
