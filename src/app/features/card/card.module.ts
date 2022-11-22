import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
