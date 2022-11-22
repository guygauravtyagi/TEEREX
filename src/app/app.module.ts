import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './store/product/products.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalModule } from './global/global.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalModule,
    HttpClientModule,
    StoreModule.forRoot(productReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
