import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/data-models/product-data-models';

import { loadProducts, loadProductsSuccess, loadProductsFailure } from './product.action';


export interface ProductsState {
    products: Product[];
    error: string | null;
    status: 'loading' | 'pending' | 'success' | 'error';    
}

export const initialState: ProductsState = {
    products: [],
    error: null,
    status: 'pending'
};

export const booksReducer = createReducer(
  initialState,
  on(loadProducts, (state) => ({
    ...state,
    status: 'pending'
  })),
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products: products,
    error: null,
    status: 'success'
  })),
  on(loadProductsSuccess, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error'
  }))
);