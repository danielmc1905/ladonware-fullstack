import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Product from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private _http: HttpClient
  ) { }

  /*
   * Requests to create a new product based on the data provided
   *
   * @Param Product
   */
  createProduct(product: Product) {
    let url = environment.baseUrl + 'products/add';
    return this._http.post<any>(url, product);
  }

  /*
   * Requests to edit the product data based on the new data provided
   *
   * @Param Product
   */
  editProduct(product: Product) {
    console.log(product)
    let url = environment.baseUrl + 'products/edit';
    return this._http.put<any>(url, product);
  }

  /*
   * Requests to retrieve all the registered products
   *
   */
  getAllProducts() {
    let url = environment.baseUrl + 'products/';
    return this._http.get<any>(url);
  }

  /*
   * Requests to delete a product by its id
   *
   * @Param id
   */
  deleteProduct(id: string, fileName: string) {
    let url = environment.baseUrl + `products/${id}/${fileName}`;
    return this._http.delete<any>(url);
  }

  /*
   * Requests to upload a multipart file to the firebase storage service
   */
  uploadImage(file: any) {
    console.log(file)
    let url = environment.baseUrl + 'products/files';
    return this._http.post<any>(url, file);
  }
}
