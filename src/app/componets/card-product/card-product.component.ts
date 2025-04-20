import { Component, input } from '@angular/core';
import { Product } from '../../interfaces/store.interfaces';

@Component({
  selector: 'app-card-product',
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {
  product = input.required<Product>();
}
