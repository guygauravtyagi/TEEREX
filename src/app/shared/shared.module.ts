import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { DescriptionPicComponent } from './description-pic/description-pic.component';


@NgModule({
  declarations: [
    ButtonComponent,
    IconButtonComponent,
    CheckBoxComponent,
    DropDownComponent,
    DescriptionPicComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    IconButtonComponent,
    CheckBoxComponent,
    DropDownComponent,
    DescriptionPicComponent
  ]
})
export class SharedModule { }
