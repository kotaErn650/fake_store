import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/product.service';
import { Product } from '../../../interfaces/store.interfaces';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export default class ProductDetailComponent {
  productService = inject(ProductsService);
  route = inject(ActivatedRoute);

  product?: Product;
  

  ngOnInit() {
    console.log('ngOnInit ejecutado');

    this.route.params.subscribe((params) => {
      const id = params['id'];
      console.log('ID recibido desde la ruta:', id);

      this.productService.getProduct(id).subscribe((resp) => {
        this.product = resp;
        console.log('Producto cargado:', this.product);
      });
    });
  }
}
