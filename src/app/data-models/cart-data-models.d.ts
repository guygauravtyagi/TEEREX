import * as DataModel from './product-data-models';

export interface CartItem{
    quantity: number;
    product: DataModel.Product;
}