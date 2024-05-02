import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderService } from '../order/order.service';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {


  constructor(
    private http: HttpClient,
    private orderService: OrderService,
    private productService: ProductService
  ) { }
  baseUrl = "http://vps-65482c69.vps.ovh.net/php/order";

  insertOrderDetail(count: number) {
    const order = this.orderService.OrderGet;
    const product = this.productService.productGet;
    console.log(order, product, count);
    return this.http.post(`${this.baseUrl}/insertOrderDetail.php`, { product, order, count });
  }


  getUser(user: any) {
    const userReturn = this.http.post(`${this.baseUrl}/getUser.php`, JSON.stringify(user));
    return userReturn;
  };


  updateUser(id: number, pass: string): void {
    this.http.post(`${this.baseUrl}/updateUser.php`, [id, pass]);
  }
}
