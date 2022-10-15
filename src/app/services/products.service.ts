import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  cachedProducts$!: Observable<Product[]>;

  constructor(private http: HttpClient) {
    // this.data = this.getProducts();
    // this.products = this.data;
  }

  getProducts(): Observable<Product[]> {
    if (!this.cachedProducts$) {
      this.cachedProducts$ = this.http
        .get('/.netlify/functions/getProducts', {
          headers: {
            'Content-Type': 'application/json ',
          },
        })
        .pipe(
          map((response: any) => response),
          shareReplay(1)
        );
    }
    console.log(this.cachedProducts$)
    return this.cachedProducts$;
  }

  // getProducts(): Observable<Product[]> {
  //   return this.http
  //     .get<Product[]>('/.netlify/functions/getProducts', {
  //       headers: {
  //         'Content-Type': 'application/json ',
  //       },
  //     })
  //     .pipe(map((response: any) => response));
  // }

  // storeProducts() {
  //   this.products.toPromise().then((res: any) => (this.products = res));
  //   // console.log('***', data);
  // }
}
