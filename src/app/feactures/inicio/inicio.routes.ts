import { ROLES_ROUTES } from './../roles/roles.routes';
import { Routes } from '@angular/router';
import { ALMACEN_ROUTES } from '../almacenes/almacen.routes';
import { USUARIOS_ROUTES } from '../usuario/usuarios.routes';
import { UNIDADMEDIDA_ROUTES } from '../unidad-medida/unidadMedida.routes';
import { UBICACIONES_ROUTES } from '../ubicaciones-almacen/ubicacionesAlmacen.routes';
import { SUBCATEGORIA_ROUTES } from '../sub-categoria-articulos/subcategoria.routes';
import { PUESTOS_ROUTES } from '../puesto/puestos.routes';
import { PROVEEDORES_ROUTES } from '../proveedor/proveedor.routes';
import { ARTICULOS_ROUTES } from '../articulos/articulos.routes';
import { AREAS_ROUTES } from '../area/areas.routes';
import { CATEGORIA_ROUTES } from '../categoria/categoria.routes';
import { DEPARTAMENTOS_ROUTES } from '../departamento/departamentos.routes';
import { DISTRITO_ROUTES } from '../distrito/distrito.routes';
import { PROVINCIAS_ROUTES } from '../provincias/provincias.routes';

export const INICIO_ROUTES: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./page/inicio-page/inicio-page').then((m) => m.InicioPage),
    children:[
      {
        path: '',
        redirectTo: 'almacenes',
        pathMatch: 'full'
      },
      ...ALMACEN_ROUTES,
      ...USUARIOS_ROUTES,
      ...UNIDADMEDIDA_ROUTES,
      ...UBICACIONES_ROUTES,
      ...SUBCATEGORIA_ROUTES,
      ...ROLES_ROUTES,
      ...PUESTOS_ROUTES,
      ...PROVEEDORES_ROUTES,
      ...ARTICULOS_ROUTES,
      ...AREAS_ROUTES,
      ...CATEGORIA_ROUTES,
      ...DEPARTAMENTOS_ROUTES,
      ...DISTRITO_ROUTES,
      ...PROVINCIAS_ROUTES
    ]
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];
