import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Title, Meta } from '@angular/platform-browser';
import { ProductsService } from 'src/app/services/products.service';
import {
  state,
  style,
  transition,
  animate,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [style({ opacity: 0 }), animate(500)]),
      transition('* => void', [style({ opacity: 0 }), animate(500)]),
    ]),
  ],
})
export class StorePageComponent implements OnInit {
  isLoading = true;
  products!: Product[];
  allProducts!: Product[];
  displayedProducts!: Product[];
  searchQuery: string = '';

  constructor(private productsService: ProductsService, private titleService: Title,
    private metaTagService: Meta) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products: Product[]) => {
      this.products = products as Product[];
      this.allProducts = this.products;
      this.displayedProducts = this.allProducts;
      this.isLoading = false;
    });

    this.titleService.setTitle("Réveillé par monsieur | Mobilier vintage");
    this.metaTagService.updateTag({name: 'description', content: "Trouvailles d'objets et de mobilier Vintage. Monsieur chine dans le passé et partout en Europe des meubles et des objets d'une autre époque qu'il réveille aprés les avoir sorti des greniers."})
  }

  filterProducts(search: string) {
    this.searchQuery = search.toLowerCase();
    this.displayedProducts = this.allProducts.filter((item: Product) => {
      return (
        item.title.toLowerCase().includes(this.searchQuery)
      );
    });
  }
}
