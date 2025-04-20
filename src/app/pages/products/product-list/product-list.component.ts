import { Component } from '@angular/core';
import { CardProductComponent } from "../../../componets/card-product/card-product.component";

@Component({
  selector: 'app-product-list',
  imports: [CardProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export default class ProductListComponent {

}
