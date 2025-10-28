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
  selector: 'app-maestro-productos-page',
  imports: [RouterOutlet, NgClass, RouterLink],
  templateUrl: './maestro-productos-page.html',
  styleUrl: './maestro-productos-page.css'
})
export class MaestroProductosPage {
  public readonly router = inject(Router);

  currentUserRole: UserRole = UserRole.ADMINISTRADOR;
  isSidebarOpen: boolean = false;

  moduleTitle: string = 'Maestro Productos';
  moduleSubtitle: string = 'Usuarios y Configuración';

 maestroproductosMenuItems: ModuleMenuItem[] = [
    // --- Grupo 1: Núcleo del Catálogo ---
    {
      name: 'Artículos',
      route: '/inicio/maestros-productos/articulos',
      icon: 'inventory',
      roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE, UserRole.SECRETARIA],
    },

    // --- Grupo 2: Estructura y Clasificación ---
    {
      name: 'Categorías',
      route: '/inicio/maestros-productos/categorias',
      icon: 'category',
      roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
    },
    {
      name: 'Subcategorías',
      route: '/inicio/maestros-productos/subcategorias',
      icon: 'view_list',
      roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
    },

    // --- Grupo 3: Unidades ---
    {
      name: 'Unidades de Medida',
      route: '/inicio/maestros-productos/unidades-medida',
      icon: 'straighten',
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

  getVisibleMenuItems(): ModuleMenuItem[] {
    return this.maestroproductosMenuItems.filter(item =>
      item.roles.includes(this.currentUserRole)
    );
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  isRouteActive(route: string): boolean {
    return this.router.url.includes(route);
  }
}
