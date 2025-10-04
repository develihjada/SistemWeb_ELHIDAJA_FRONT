import { Routes } from '@angular/router';

export const AREAS_ROUTES: Routes = [
  {
    path: 'areas',
    loadComponent: () => import('./page/lista-areas-page/lista-areas-page').then(m => m.ListaAreasPage)
  }
];
