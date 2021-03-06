import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProductViewComponent } from './components/views/edit-product-view/edit-product-view.component';
import { MarketViewComponent } from './components/views/market-view/market-view.component';
import { ProductDetailsViewComponent } from './components/views/product-details-view/product-details-view.component';
import { ProductsViewComponent } from './components/views/products-view/products-view.component';
import { ProfileViewComponent } from './components/views/profile-view/profile-view.component';

const routes: Routes = [
  { path: 'market', component: MarketViewComponent },
  { path: 'add-product', component: EditProductViewComponent },
  { path: 'profile', component: ProfileViewComponent },
  { path: '',   redirectTo: '/market', pathMatch: 'full' },
  { path: 'product', component: ProductsViewComponent },
  { path: 'products-details-view', component: ProductDetailsViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
