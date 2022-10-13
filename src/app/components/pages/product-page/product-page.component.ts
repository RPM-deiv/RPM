import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  public id: string = '';
  public products!: Product[];
  public product: any;
  public routeSub!: Subscription;
  public mainImage = '';

  public email: string = 'rpm-deiv@gmail.com';
  public contactVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.productsService.products.subscribe((products: Product[]) => {
      this.products = products as Product[];
      this.product = this.products.find((el) => el.id === this.id);
      this.mainImage = this.product.images[0].large;
    });
    if (window.history.state.id) {
      this.product = window.history.state;
      return;
    }
    // this.productsService.products.subscribe((products: Product[]) => {
    //   this.products = products as Product[];
    //   this.displayedProducts = this.products;
    // });
  }

  setMainImage(e: Event, img: string) {
    this.mainImage = img;
  }

  mouseMove(e: any, el: any) {
    if (e.sourceCapabilities.firesTouchEvents) return;

    el.href;
    el.style.transform = 'scale(3)';
    el.style.transformOrigin = `
      ${((e.pageX - el.offsetLeft) / el.width) * 100}%
      ${((e.pageY - el.offsetTop) / el.height) * 100}%
    `;
  }
}
