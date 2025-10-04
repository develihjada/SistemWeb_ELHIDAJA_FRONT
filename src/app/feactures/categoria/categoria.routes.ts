import { Routes } from '@angular/router';

export const CATEGORIA_ROUTES: Routes = [
  {
    path:'categorias',
    loadComponent: () => import('./page/lista-categorias-page/lista-categorias-page').then(m => m.ListaCategoriasPage)
  }
];
