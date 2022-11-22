import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';



@NgModule({
  declarations: [
    ButtonComponent,
    IconButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    IconButtonComponent
  ]
})
export class SharedModule { }
