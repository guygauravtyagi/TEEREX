import { createAction, props } from "@ngrx/store";
import * as DataModel from './../../data-models/product-data-models';


export const fetchProducts = createAction(
    '[Products] Fetch Products',
    props<{ content: DataModel.Product[] }>()
);

export const loadProducts = createAction('[Products] | Load Products from API');

export const loadProductsSuccess = createAction(
    '[Products] | Load Products from API',
    props<{ content: DataModel.Product[] }>()
);

export const loadProductsFailure = createAction(
    '[Products] | Load Products from API',
    props<{ error: string }>()
);
