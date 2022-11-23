import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {
  state,
  style,
  transition,
  animate,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-delivery-page',
  templateUrl: './delivery-page.component.html',
  styleUrls: ['./delivery-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [style({ opacity: 0}), animate(500)]),
      transition('* => void', [style({ opacity: 0}), animate(500)]),
    ]),
  ],
})
export class DeliveryPageComponent implements OnInit {

  constructor(private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Réveillé par monsieur | Livraison");
    this.metaTagService.updateTag({name: 'description', content: 'Modalités de livraison ou retrait de marchandise.'})
  }

}
