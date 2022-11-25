import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchProductPipe } from './pipes/search-product.pipe';



@NgModule({
  declarations: [ 
    SearchProductPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchProductPipe
  ]
})
export class UtilsModule { }
