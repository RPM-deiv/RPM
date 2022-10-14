import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import {
  state,
  style,
  transition,
  animate,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [style({ opacity: 0}), animate(500)]),
      transition('* => void', [style({ opacity: 0}), animate(500)]),
    ]),
  ],
})
export class StoreItemComponent implements OnInit {
  @Input() product: Product = {
    id: 'id',
    title: 'title',
    url: 'url',
    tags: [''],
    state: 'state',
    dimensions: 'dimensions',
    price: 1,
    body: 'body',
    images: [''],
  };

  constructor() {}

  ngOnInit(): void {}
}
