import { Routes } from '@angular/router';

export const ALMACEN_ROUTES: Routes = [
  {
    path: 'almacenes',
    loadComponent: () => import('./page/lista-almacenes-page/lista-almacenes-page').then(m => m.ListaAlmacenesPage)
  }
];
