import { Routes } from '@angular/router';

export const PROVEEDORES_ROUTES: Routes = [
  {
    path: 'proveedores',
    loadComponent: () => import('./page/lista-proveedor-page/lista-proveedor-page').then(m => m.ListaProveedorPage)
  }
];
