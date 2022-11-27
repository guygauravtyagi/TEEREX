import { Component } from '@angular/core';
import { Filter } from 'src/app/data-models/filter-data-models';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent {

  public filterList: Filter[];

  constructor(private filterService: FilterService) {
    this.filterList = this.filterService.getFilterList();
  }

  checkBoxTriggered(event: Event) {
    console.log(event);
  }
}
