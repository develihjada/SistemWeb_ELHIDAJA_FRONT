import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

enum UserRole {
  ADMINISTRADOR = 'administrador',
  SECRETARIA = 'secretaria',
  SOPORTE = 'soporte',
}

interface ModuleMenuItem {
  name: string;
  route: string;
  icon: string;
  roles: UserRole[];
}

@Component({
  selector: 'app-reportes-analiticas-page',
  imports: [RouterOutlet, NgClass, RouterLink],
  templateUrl: './reportes-analiticas-page.html',
  styleUrl: './reportes-analiticas-page.css'
})
export class ReportesAnaliticasPage {
  public readonly router = inject(Router);

  currentUserRole: UserRole = UserRole.ADMINISTRADOR;
  isSidebarOpen: boolean = false;
  moduleTitle: string = 'Reportes y Analíticas';
  moduleSubtitle: string = 'Gestión de reportes';

reportesMenuItems: ModuleMenuItem[] = [
    // --- Grupo 1: Logística y Stock ---
    {
      name: 'Inventario Actual (Stock)',
      route: '/inicio/reportes-analiticos/inventario-stock',
      icon: 'inventory_2',
      roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE, UserRole.SECRETARIA],
    },
    {
      name: 'Valoración de Inventario',
      route: '/inicio/reportes-analiticos/valoracion-inventario',
      icon: 'assessment',
      roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
    },
    {
      name: 'Movimientos Históricos',
      route: '/inicio/reportes-analiticos/movimientos-historicos',
      icon: 'swap_horiz',
      roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE, UserRole.SECRETARIA],
    },
    // --- Grupo 2: Desempeño Financiero y Proveedores ---
    {
      name: 'Facturación por Período',
      route: '/inicio/reportes-analiticos/facturacion-periodo',
      icon: 'receipt',
      roles: [UserRole.ADMINISTRADOR, UserRole.SECRETARIA],
    },
    {
      name: 'Ranking de Proveedores',
      route: '/inicio/reportes-analiticos/ranking-proveedores',
      icon: 'person',
      roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
    },
    // --- Grupo 3: Métricas y KPIs ---
    {
      name: 'KPIs de Almacén',
      route: '/inicio/reportes-analiticos/kpis-almacen',
      icon: 'bar_chart',
      roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
    },
];

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      setTimeout(() => {
        this.isSidebarOpen = false;
      }, 100);
    });
  }

  ngOnInit(): void {

  }

  /**
   * Filtra los ítems del menú según el rol actual del usuario.
   */
  getVisibleMenuItems(): ModuleMenuItem[] {
    return this.reportesMenuItems.filter(item =>
      item.roles.includes(this.currentUserRole)
    );
  }

  /**
   * Alterna la visibilidad del sidebar para dispositivos móviles.
   */
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  /**
   * Verifica si la ruta actual coincide con la ruta del ítem para aplicar estilos activos.
   */
  isRouteActive(route: string): boolean {
    return this.router.url.includes(route);
  }

}
