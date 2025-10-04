import { Routes } from '@angular/router';

export const UBICACIONES_ROUTES: Routes = [
  {
    path: 'ubicaciones-almacen',
    loadComponent: () => import('./page/lista-ubicaciones-almacen-page/lista-ubicaciones-almacen-page').then(m => m.ListaUbicacionesAlmacenPage)
  }
];
