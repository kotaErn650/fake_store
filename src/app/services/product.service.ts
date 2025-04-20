import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  async getProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
  }
}
