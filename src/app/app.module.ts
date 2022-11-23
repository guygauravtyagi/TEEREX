import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalModule } from './global/global.module';
import { counterReducer } from './store/cart-store/cart.reducer';
import { booksReducer } from './store/product-store/product.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalModule,
    HttpClientModule,
    StoreModule.forRoot({ payload: counterReducer, products: booksReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
