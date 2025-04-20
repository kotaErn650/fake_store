import { Component, inject } from '@angular/core';
import { CardComponent } from '../../componets/card/card.component';
import { ProductsService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {
  productos: any = [];
  productsService = inject(ProductsService);

  ngOnInit() {
    this.getProductos();
  }
  async getProductos() {
    this.productos = await this.productsService.getProducts();
  }
}
