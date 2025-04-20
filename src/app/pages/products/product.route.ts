import { Routes } from '@angular/router';

export default [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },

  {
    path: 'products',
    title: 'Preoducts',
    loadComponent: () => import('./product-list/product-list.component'),
  },
  {
    path: 'products/:id',
    title: 'Preoducts-Detail',
    loadComponent: () => import('./product-detail/product-detail.component'),
  },
] as Routes;
