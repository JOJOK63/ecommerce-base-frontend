import { Routes } from '@angular/router';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductDetailsComponent} from './products/product-details/product-details.component';
import {NewProductComponent} from './products/new-product/new-product.component';

export const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'new-product',
    component: NewProductComponent,
  }
];
