import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productData:Product[]=[];

  baseUrl = "http://localhost/php/products";

  constructor(private http: HttpClient) { }

  getProducts():any{
    return this.http.get(`${this.baseUrl}/getAllProducts.php`);
  }

  insertAllProducts(){
    return this.http.get(`${this.baseUrl}/insertProduct.php`);
  }

  getProduct(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/getProduct.php?id=${id}`);
  }
}
