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
  baseUrl = "http://vps-65482c69.vps.ovh.net/php/orders";

  insertOrderDetail(id_product:number, count: number) {
    const order = this.orderService.OrderGet;
    console.log(order,  count);
    return this.http.post(`${this.baseUrl}/insertOrderDetail.php`, { id_product, order, count });
  }


  getOrderDetail():any {
    const order = this.orderService.OrderGet;
    return this.http.get(`${this.baseUrl}/getDetailOrders?id=${order}.php`);
  };




  updateUser(id: number, pass: string): void {
    this.http.post(`${this.baseUrl}/updateUser.php`, [id, pass]);
  }
}
