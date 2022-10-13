import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorePageComponent } from './components/pages/store-page/store-page.component';
import { DeliveryPageComponent } from './components/pages/delivery-page/delivery-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: StorePageComponent },
  { path: 'livraison', component: DeliveryPageComponent },
  { path: 'contact', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
