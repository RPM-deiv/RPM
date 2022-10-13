import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss'],
})
export class StorePageComponent implements OnInit {
  // products!: Observable<Product[]>;
  products!: Product[];
  allProducts!: Product[];
  displayedProducts!: Product[];
  searchQuery: string = '';

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    // this.products = this.productsService.getProducts();
    // this.products = this.productsService.getProducts();
    this.productsService.products.subscribe((products: Product[]) => {
      this.products = products as Product[];
      this.allProducts = this.products;
      this.displayedProducts = this.allProducts;
    });
  }

  filterProducts(search: string) {
    this.searchQuery = search.toLowerCase();
    this.displayedProducts = this.allProducts.filter((item: Product) => {
      return (
        item.title.toLowerCase().includes(this.searchQuery) ||
        item.body.toLowerCase().includes(this.searchQuery)
      );
    });
  }
}
