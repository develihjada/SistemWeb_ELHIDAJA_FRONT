import { Routes } from '@angular/router';

export const DEPARTAMENTOS_ROUTES: Routes = [
  {
    path: 'departamentos',
    loadComponent: () => import('./page/lista-departamento-page/lista-departamento-page').then(m => m.ListaDepartamentoPage)
  }
];
