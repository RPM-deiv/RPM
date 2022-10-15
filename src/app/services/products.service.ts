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
    return this.cachedProducts$;
  }
}
