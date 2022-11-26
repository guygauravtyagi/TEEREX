import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FilterMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FilterMenuComponent
  ]
})
export class FilterMenuModule { }
