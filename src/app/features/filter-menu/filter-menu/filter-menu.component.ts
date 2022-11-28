import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Filter } from 'src/app/data-models/filter-data-models';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent {

  @Input() filterList: Filter[] = [];
  @Output() filterUpdated: EventEmitter<Filter[]> = new EventEmitter<Filter[]>();
  
  checkBoxTriggered(event: any) {
    this.filterList.forEach(element => {
      if(element.id === event.parentId) {
        element.subMenu.forEach(ele => {
          if (ele.name === event.value) {
            ele.isActive = event.isChecked;
          }
        })
      }
    });
    this.filterUpdated.emit(this.filterList);
  }
}
