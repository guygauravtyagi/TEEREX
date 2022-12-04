import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalModule } from './global/global.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalModule,
    HttpClientModule,
  ],
  providers: [
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'INR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
