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
  selector: 'app-administracion-configuracion-page',
  imports: [RouterOutlet, NgClass, RouterLink],
  templateUrl: './administracion-configuracion-page.html',
  styleUrl: './administracion-configuracion-page.css'
})
export class AdministracionConfiguracionPage {
  public readonly router = inject(Router);

  currentUserRole: UserRole = UserRole.ADMINISTRADOR;
  isSidebarOpen: boolean = false;

  moduleTitle: string = 'Administración';
  moduleSubtitle: string = 'Usuarios y Configuración';

  administracionMenuItems: ModuleMenuItem[] = [
    {
      name: 'Usuarios',
      route: '/inicio/administrativo-configuraciones/usuarios',
      icon: 'person',
      roles: [UserRole.ADMINISTRADOR],
    },
    {
      name: 'Roles y Permisos',
      route: '/inicio/administrativo-configuraciones/roles',
      icon: 'security',
      roles: [UserRole.ADMINISTRADOR],
    },
    {
      name: 'Áreas',
      route: '/inicio/administrativo-configuraciones/areas',
      icon: 'business',
      roles: [UserRole.ADMINISTRADOR],
    },
    {
      name: 'Puestos',
      route: '/inicio/administrativo-configuraciones/puestos',
      icon: 'work',
      roles: [UserRole.ADMINISTRADOR],
    },
    {
      name: 'Departamentos',
      route: '/inicio/administrativo-configuraciones/departamentos',
      icon: 'location_on',
      roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
    },
    {
      name: 'Provincias',
      route: '/inicio/administrativo-configuraciones/provincias',
      icon: 'map',
      roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
    },
    {
      name: 'Distritos',
      route: '/inicio/administrativo-configuraciones/distritos',
      icon: 'place',
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
      // Lógica de inicialización
  }

  getVisibleMenuItems(): ModuleMenuItem[] {
    return this.administracionMenuItems.filter(item =>
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
