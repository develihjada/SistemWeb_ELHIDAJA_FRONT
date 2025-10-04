import { Routes } from '@angular/router';

export const SUBCATEGORIA_ROUTES: Routes = [
  {
    path: 'sub-categoria',
    loadComponent: () => import('./page/lista-subcategoria-page/lista-subcategoria-page').then(m => m.ListaSubcategoriaPage)
  }
];
