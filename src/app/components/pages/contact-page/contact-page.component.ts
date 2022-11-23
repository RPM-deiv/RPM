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
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [style({ opacity: 0}), animate(500)]),
      transition('* => void', [style({ opacity: 0}), animate(500)]),
    ]),
  ],
})
export class ContactPageComponent implements OnInit {

  constructor(private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Réveillé par monsieur | Contact");
    this.metaTagService.updateTag({name: 'description', content: 'Contactez-nous pour en savoir plus sur nos trouvailles et modalités de livraison!'})
  }

}
