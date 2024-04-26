import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductService } from './services/product/product.service';
import { PortadaComponent } from './components/portada/portada.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  imports: [RouterOutlet, PortadaComponent, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    //TODO:
    //tenemos que hacerr que solo se inserten una vez
    /*this.productService.insertAllProducts().subscribe((data) => {
      console.log("los insertamos desde el prioncipio0", data)
    });*/
  }
  title = 'DigitalChef';

}
