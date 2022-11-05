import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/Product';
import {
  state,
  style,
  transition,
  animate,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [style({ opacity: 0 }), animate(500)]),
      transition('* => void', [style({ opacity: 0 }), animate(500)]),
    ]),
  ],
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
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    if (window.history.state.id === this.id) {
      this.product = window.history.state;
      this.mainImage = this.product.images[0].large;
    } else {
      this.productsService.getProducts().subscribe((products: Product[]) => {
        this.products = products as Product[];
        this.product = this.products.find((el) => el.id === this.id);

        if (!this.product) {
          this.router.navigate(['/page-non-trouvee']);
          return;
        }

        this.mainImage = this.product.images[0].large;
      });
    }
  }

  setMainImage(e: Event, img: string) {
    this.mainImage = img;
  }

  mouseMove(e: any, el: any) {
    // if (e.sourceCapabilities.firesTouchEvents) return;
    if ('ontouchstart' in document.documentElement) return;

    el.style.transform = 'scale(3)';
    el.style.transformOrigin = `
      ${((e.pageX - el.offsetLeft) / el.width) * 100}%
      ${((e.pageY - el.offsetTop) / el.height) * 100}%
    `;
  }

  copyToClipboard(btn: HTMLButtonElement) {
    btn.style.backgroundColor = '#d9f99d';
    setTimeout(() => {
      btn.style.backgroundColor = '';
    }, 500);
    const el = document.createElement('textarea');
    el.value = 'reveilleparmonsieur@gmail.com';
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
