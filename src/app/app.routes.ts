import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'HOME',
    loadComponent: () => import('./pages/home/home.component'),
  },

  {
    path: 'users',
    title: 'USERS',
    loadComponent: () => import('./pages/users/user.component'),
  },
];
