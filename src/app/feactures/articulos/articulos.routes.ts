import { Routes } from '@angular/router';

export const ARTICULOS_ROUTES: Routes = [
  {
    path: 'articulos',
    loadComponent: () => import('./page/lista-articulos-page/lista-articulos-page').then(m => m.ListaArticulosPage)
  }
];
