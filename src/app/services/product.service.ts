import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/store.interfaces';


@Injectable({
  providedIn: 'root',
})
export class ProductsService extends BaseHttpService {
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProduct(id:string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/${id}`);
  }
}
