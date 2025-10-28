import { Routes } from '@angular/router';
import { INICIO_ROUTES } from './feactures/inicio/inicio.routes';
import { LOGIN_ROUTES } from './feactures/login/login.routes';
import { OPCIONESINICIO_ROUTES } from './shared/page/opcionesInicio.routes';

export const routes: Routes = [
  ...LOGIN_ROUTES,
  ...INICIO_ROUTES,
  ...OPCIONESINICIO_ROUTES,
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
