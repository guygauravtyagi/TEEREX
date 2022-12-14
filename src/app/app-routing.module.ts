import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'products',
  pathMatch: 'full',
}, {
  path: 'products',
  loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),
}, {
  path: 'cart',
  loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule),
}, {
  path: '**',
  redirectTo: 'products',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
