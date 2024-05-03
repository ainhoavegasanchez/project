import { Component, Input, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Product } from '../../../interfaces/Product';
import { CounterComponent } from './counter/counter.component';
import { OrderDetailService } from '../../../services/order_detail/order-detail.service';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CounterComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  constructor(
    private orderDetailService: OrderDetailService,
    private productService: ProductService
  ) { }

  products: Product[] = [];
  ngOnInit(): void {
    const listDetail: any[] = this.orderDetailService.getOrderDetail().subscribe();
    listDetail.forEach(detail => {
      const product = this.productService.getProduct(detail.id_producto).subscribe(
        data => {
          this.products.push(data);
        }
      );

    })
  }





}
