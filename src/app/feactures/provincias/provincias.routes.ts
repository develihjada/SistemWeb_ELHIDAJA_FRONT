import { Routes } from '@angular/router';

export const PROVINCIAS_ROUTES: Routes = [
  {
    path: 'provincias',
    loadComponent: () => import('./page/lista-provincias-page/lista-provincias-page').then(m => m.ListaProvinciasPage)
  }
];
