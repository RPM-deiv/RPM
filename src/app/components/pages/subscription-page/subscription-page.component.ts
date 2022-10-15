import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.scss'],
})
export class SubscriptionPageComponent implements OnInit {
  private url: string = '';
  public bienvenue: boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log(window.location.href);
    this.url = window.location.href;
    this.bienvenue = this.url.includes('bienvenue');
  }
}
