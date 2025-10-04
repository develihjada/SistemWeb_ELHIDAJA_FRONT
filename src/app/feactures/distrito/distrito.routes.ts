import { Routes } from '@angular/router';

export const DISTRITO_ROUTES: Routes = [
  {
    path: 'distritos',
    loadComponent: () => import('./page/lista-distritos-page/lista-distritos-page').then(m => m.ListaDistritosPage)
  }
];
