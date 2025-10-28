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
  selector: 'app-logistica-almacen-page',
  imports: [RouterOutlet, NgClass, RouterLink],
  templateUrl: './logistica-almacen-page.html',
  styleUrl: './logistica-almacen-page.css'
})
export class LogisticaAlmacenPage {

  public readonly router = inject(Router);

  currentUserRole: UserRole = UserRole.ADMINISTRADOR;
  isSidebarOpen: boolean = false;
  moduleTitle: string = 'Logística y Almacén';
  moduleSubtitle: string = 'Gestión de Inventario';

  logisticaMenuItems: ModuleMenuItem[] = [
    {
      name: 'Almacenes',
      route: '/inicio/logistica-almacen/almacenes',
      icon: 'warehouse',
      roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
    },
    {
      name: 'Inventario',
      route: '/inicio/logistica-almacen/inventarios',
      icon: 'inventory_2',
      roles: [UserRole.ADMINISTRADOR, UserRole.SECRETARIA],
    },
    {
      name: 'Ubicaciones y Zonas',
      route: '/inicio/logistica-almacen/ubicaciones-almacen',
      icon: 'assessment',
      roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
    },
    {
      name: 'Proveedores',
      route: '/inicio/logistica-almacen/proveedores',
      icon: 'person',
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
    return this.logisticaMenuItems.filter(item =>
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
