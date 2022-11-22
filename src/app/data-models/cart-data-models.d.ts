import * as DataModel from './product-data-models';

export interface Cart{
    quantity: number;
    product: DataModel.Product;
}