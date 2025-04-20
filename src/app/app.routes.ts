import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    title: 'USERS',
    loadComponent: () => import('./pages/users/users.component'),
  },

  {
    path: '',
    title: 'Products',
    loadChildren: () => import('./pages/products/product.route'),
  },

  {
    path: 'cart',
    title: 'Cart',
    loadComponent: () => import('./pages/cart/cart.component'),
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];
