import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/data-models/product-data-models';
import { ActionType } from "./../store.config";

export const loadProducts = createAction(ActionType.LOAD_PRODUCTS);

export const loadProductsSuccess = createAction(
    ActionType.LOAD_PRODUCTS_SUCCESS,
    props<{ payload: Product[] }>
);

export const loadProductsFailure = createAction(
    ActionType.LOAD_PRODUCTS_FAILURE,
    props<{ error: string }>
);
