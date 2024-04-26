import { Product } from './../../interfaces/Product';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HttpClientModule, ProductComponent, ListComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuComponent implements OnInit {

  constructor(private productService: ProductService) { }

  productList: Product[] = [];
  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.productService.getProducts().subscribe((result: any[]) => {
      this.productList = result.map(item => ({
        id: item.id,
        nombre: item.nombre,
        descripcion: item.descripcion,
        foto: item.foto,
        id_catego: item.id_catego,
        precio: item.precio
      }));
    });
  }

  MenuList:Product[]=[];
  addProductList(id:number){
     this.productService.getProduct(id).subscribe(
      (product:Product)=>{
        console.log(product);
        this.MenuList.push(product);
      }
    );
  }
}
