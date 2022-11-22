import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ProductState } from './products.reducer';


export const selectProducts = (state: AppState) => state?.products;
export const SELECT_PRODUCTS = createSelector(
    selectProducts,
    (state: ProductState) => state?.products
);