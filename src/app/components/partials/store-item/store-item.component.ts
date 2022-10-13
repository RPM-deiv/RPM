import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss'],
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
