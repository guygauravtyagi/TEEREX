import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/data-models/product-data-models';

@Pipe({
  name: 'searchProduct',
  pure: false
})
export class SearchProductPipe implements PipeTransform {

  transform(value: Product[], ...args: any[]): Product[] {
    return value.filter(item => item.quantity > 0)
    .filter(item => !args[0] || item.color.toLowerCase() === args[0])
    .filter(item => !args[1] || item.type.toLowerCase() === args[1])
    .filter(item => !args[2] || item.gender.toLowerCase() === args[2])
    .filter(item => !args[3] || item.price === args[3]);
  }
}
