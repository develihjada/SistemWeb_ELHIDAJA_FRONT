import { Routes } from '@angular/router';

export const UNIDADMEDIDA_ROUTES: Routes = [
  {
    path:'unidad-medida',
    loadComponent: () => import('./page/lista-unidad-medida-page/lista-unidad-medida-page').then(m => m.ListaUnidadMedidaPage)
  }
];
