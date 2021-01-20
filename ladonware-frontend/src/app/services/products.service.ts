import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Product from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsList: Product[] = [];
  productsListObserver: Subject<Product[]> = new Subject<Product[]>();

  constructor() { }

  setProductsList(productsList: Product[]) {
    this.productsList = productsList;
    this.productsListObserver.next(productsList);
  }

  deleteProduct(product: Product) {
    let index = this.productsList.indexOf(product);
    this.productsList.splice(index, 1);
    this.productsListObserver.next(this.productsList);
  }
}
