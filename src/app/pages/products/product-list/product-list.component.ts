import { Component, inject } from '@angular/core';
import { CardProductComponent } from '../../../componets/card-product/card-product.component';
import { ProductsService } from '../../../services/product.service';
import { Product } from '../../../interfaces/store.interfaces';

@Component({
  selector: 'app-product-list',
  imports: [CardProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export default class ProductListComponent {
  productService = inject(ProductsService);
  products :Product[]= [];

  ngOnInit() {
    console.log('ngOnInit ejecutado');
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((resp) => {
      this.products = resp;
      console.log(this.products)
    });
  }
}
