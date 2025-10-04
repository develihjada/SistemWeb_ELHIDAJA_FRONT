import { Routes } from '@angular/router';

export const USUARIOS_ROUTES: Routes = [
  {
    path:'usuarios',
    loadComponent: () => import('./page/lista-usuarios-page/lista-usuarios-page').then(m => m.ListaUsuariosPage)
  }
];
