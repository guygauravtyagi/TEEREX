import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { CheckBoxComponent } from './check-box/check-box.component';


@NgModule({
  declarations: [
    ButtonComponent,
    IconButtonComponent,
    CheckBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    IconButtonComponent,
    CheckBoxComponent
  ]
})
export class SharedModule { }
