import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorePageComponent } from './components/pages/store-page/store-page.component';
import { DeliveryPageComponent } from './components/pages/delivery-page/delivery-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { SubscriptionPageComponent } from './components/pages/subscription-page/subscription-page.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: StorePageComponent },
  { path: 'livraison', component: DeliveryPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'newsletter', component: SubscriptionPageComponent },
  { path: 'newsletter-bienvenue', component: SubscriptionPageComponent },
  {
    path: 'produits/:id',
    component: ProductPageComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
