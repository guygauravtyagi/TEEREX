import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/data-models/product-data-models';

@Pipe({
  name: 'searchProduct',
  pure: false
})
export class SearchProductPipe implements PipeTransform {

  transform(value: Product[], ...args: any[]): Product[] {
    return value.filter(item => item.quantity > 0)
      .filter(ele => args[0].length === 0 || args[0].includes(ele.color))
      .filter(ele => args[1].length === 0 || args[1].includes(ele.gender))
      .filter(ele => {
        if (args[2].length === 0) return true;
        else {
          let flag = false;
          args[2].forEach((val: any) => {
            if (val.upperLimit >= ele.price && val.lowerLimit < ele.price)
              flag = true;
          })
          return flag;
        }
      })
      .filter(ele => args[3].length === 0 || args[3].includes(ele.type));
  }
}
