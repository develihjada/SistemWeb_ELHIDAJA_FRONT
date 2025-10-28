import { Routes } from '@angular/router';
import { INVENTARIO_ROUTES } from '../../feactures/inventario/inventario.routes';
import { ALMACEN_ROUTES } from '../../feactures/almacenes/almacen.routes';
import { DEPARTAMENTOS_ROUTES } from '../../feactures/departamento/departamentos.routes';
import { DISTRITO_ROUTES } from '../../feactures/distrito/distrito.routes';
import { PROVINCIAS_ROUTES } from '../../feactures/provincias/provincias.routes';
import { USUARIOS_ROUTES } from '../../feactures/usuario/usuarios.routes';
import { UNIDADMEDIDA_ROUTES } from '../../feactures/unidad-medida/unidadMedida.routes';
import { ARTICULOS_ROUTES } from '../../feactures/articulos/articulos.routes';
import { CATEGORIA_ROUTES } from '../../feactures/categoria/categoria.routes';
import { SUBCATEGORIA_ROUTES } from '../../feactures/sub-categoria-articulos/subcategoria.routes';
import { ROLES_ROUTES } from '../../feactures/roles/roles.routes';
import { PUESTOS_ROUTES } from '../../feactures/puesto/puestos.routes';
import { AREAS_ROUTES } from '../../feactures/area/areas.routes';
import { UBICACIONES_ROUTES } from '../../feactures/ubicaciones-almacen/ubicacionesAlmacen.routes';
import { PROVEEDORES_ROUTES } from '../../feactures/proveedor/proveedor.routes';

export const OPCIONESINICIO_ROUTES: Routes = [
  {
    path: 'inicio/administrativo-configuraciones',
    loadComponent: () =>
      import('./administracion-configuracion-page/administracion-configuracion-page').then(
        m => m.AdministracionConfiguracionPage,
      ),
    children: [
      ...USUARIOS_ROUTES,
      ...DEPARTAMENTOS_ROUTES,
      ...DISTRITO_ROUTES,
      ...PROVINCIAS_ROUTES,
      ...ROLES_ROUTES,
      ...PUESTOS_ROUTES,
      ...AREAS_ROUTES,
    ],
  },
  {
    path: 'facturacion',
    loadComponent: () => import('./facturacion-page/facturacion-page').then(m => m.FacturacionPage),
  },
  {
    path: 'inicio/logistica-almacen',
    loadComponent: () =>
      import('./logistica-almacen-page/logistica-almacen-page').then(m => m.LogisticaAlmacenPage),
    children: [
      ...ALMACEN_ROUTES,
      ...INVENTARIO_ROUTES,
      ...UBICACIONES_ROUTES,
      ...PROVEEDORES_ROUTES,
    ],
  },
  {
    path: 'inicio/maestros-productos',
    loadComponent: () =>
      import('./maestro-productos-page/maestro-productos-page').then(m => m.MaestroProductosPage),
    children: [
      ...UNIDADMEDIDA_ROUTES,
      ...ARTICULOS_ROUTES,
      ...CATEGORIA_ROUTES,
      ...SUBCATEGORIA_ROUTES,
    ],
  },
  {
    path: 'inicio/reportes-analiticos',
    loadComponent: () =>
      import('./reportes-analiticas-page/reportes-analiticas-page').then(
        m => m.ReportesAnaliticasPage,
      ),
  },
  {
    path: 'servicios-proyectos',
    loadComponent: () =>
      import('./servicio-proyectos/servicio-proyectos').then(m => m.ServicioProyectos),
  },
];
