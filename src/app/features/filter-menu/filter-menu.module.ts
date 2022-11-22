import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';



@NgModule({
  declarations: [
    FilterMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterMenuComponent
  ]
})
export class FilterMenuModule { }
