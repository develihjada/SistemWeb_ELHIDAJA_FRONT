import { Routes } from '@angular/router';

export const PUESTOS_ROUTES: Routes = [
  {
    path: 'puestos',
    loadComponent: () => import('./page/lista-puestos-page/lista-puestos-page').then(m => m.ListaPuestosPage)
  }
];
