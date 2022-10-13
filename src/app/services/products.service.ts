import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products: any;

  constructor(private http: HttpClient) {
    this.products = this.getProducts();
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/.netlify/functions/getProducts', {
      headers: {
        'Content-Type': 'application/json ',
      },
    });
  }

  storeProducts() {
    this.products.toPromise().then((res: any) => this.products = res);
    // console.log('***', data);
  }
}
