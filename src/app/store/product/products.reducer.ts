import { createReducer, on } from "@ngrx/store";
import { fetchProducts, loadProducts, loadProductsFailure, loadProductsSuccess } from "./product.actions";
import * as DataModel from './../../data-models/product-data-models';

export interface ProductState {
    products: DataModel.Product[];
    error: string | null,
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ProductState = {
    products: [],
    error: null,
    status: 'pending',
}

export const productReducer = createReducer(
    initialState,
    on(fetchProducts, (state, { content }) => ({
        products: content,
        error: null,
        status: 'success'
    })),
    on(loadProducts, (state) => ({ ...state, status: 'loading' })),
    on(loadProductsSuccess, (state, { content }) => ({
        ...state,
        products: content,
        error: null,
        status: 'success'
    })),
    on(loadProductsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error'
    })),
);
