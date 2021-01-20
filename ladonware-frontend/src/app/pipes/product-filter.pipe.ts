import { Pipe, PipeTransform } from '@angular/core';
import Product from '../model/Product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: any, ...args: any): unknown {
    let filterValue = args[0];
    if (filterValue != '') {
      return value.filter((product: Product) => (product.id.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
        || product.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())));
    } else {
      return value;
    }
  }

}
