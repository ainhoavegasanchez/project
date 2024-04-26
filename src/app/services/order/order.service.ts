import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../interfaces/Order';
import { Product } from '../../interfaces/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl = "http://localhost/php/order";

  constructor(private http: HttpClient) { }

  insertOrder(order:Order){
    this.http.post(`${this.baseUrl}/insertOrder.php`, order);
  };
  
  getOrder(id:number):Observable<Order>{
    return this.http.get<Order>(`${this.baseUrl}/getOrder.php?id_usuario=${id}`);
  };

  insertDetailOrder(id_pedido:number, id_usuario:number, product:Product, cantidad:number):void{
    this.http.post(`${this.baseUrl}/insertDetailOrder.php`, [id_pedido, id_usuario, product, cantidad]);
  }
  updateDetailOrder(id:number, cantidad:number):void{
    this.http.post(`${this.baseUrl}/updateDetailOrder.php`, [id, cantidad]);
  }
}
