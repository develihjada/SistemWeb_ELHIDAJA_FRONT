import { Routes } from '@angular/router';

export const INVENTARIO_ROUTES: Routes = [
  {
    path: 'inventarios',
    loadComponent: () => import('./page/lista-inventario-page/lista-inventario-page').then(m => m.ListaInventarioPage)
  }
];
