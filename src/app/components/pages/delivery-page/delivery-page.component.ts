import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
