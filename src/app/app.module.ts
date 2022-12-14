import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorePageComponent } from './components/pages/store-page/store-page.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { StoreItemComponent } from './components/partials/store-item/store-item.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { DeliveryPageComponent } from './components/pages/delivery-page/delivery-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsletterFormComponent } from './components/partials/newsletter-form/newsletter-form.component';
import { SubscriptionPageComponent } from './components/pages/subscription-page/subscription-page.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    StorePageComponent,
    HeaderComponent,
    FooterComponent,
    StoreItemComponent,
    ProductPageComponent,
    DeliveryPageComponent,
    ContactPageComponent,
    NewsletterFormComponent,
    SubscriptionPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
