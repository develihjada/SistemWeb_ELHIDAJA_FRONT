import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

interface MenuItem {
  name: string;
  icon: string;
  route: string;
  roles: UserRole[];
}

interface MenuSection {
  title: string;
  items: MenuItem[];
  roles: UserRole[];
}

enum UserRole {
  ADMINISTRADOR = 'administrador',
  SECRETARIA = 'secretaria',
  SOPORTE = 'soporte',
}

@Component({
  selector: 'app-inicio-page',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './inicio-page.html',
  styleUrl: './inicio-page.css',
})
export class InicioPage {
  private readonly router = inject(Router);

  // Simulación del rol actual del usuario (esto vendría del servicio de autenticación)
  currentUserRole: UserRole = UserRole.ADMINISTRADOR;

  menuSections: MenuSection[] = [
    {
      title: 'Sistema',
      roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
      items: [
        {
          name: 'Usuarios',
          icon: 'person',
          route: '/inicio/usuarios',
          roles: [UserRole.ADMINISTRADOR],
        },
        {
          name: 'Áreas',
          icon: 'assessment',
          route: '/inicio/areas',
          roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
        },
        {
          name: 'Almacenes',
          icon: 'warehouse',
          route: '/inicio/almacenes',
          roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
        },
        {
          name: 'Roles',
          icon: 'warehouse',
          route: '/inicio/roles',
          roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
        },
        {
          name: 'Puestos',
          icon: 'warehouse',
          route: '/inicio/puestos',
          roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
        },
      ],
    },
    {
      title: 'Inventarios',
      roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
      items: [
        {
          name: 'Productos',
          icon: 'inventory',
          route: '/inicio/articulos',
          roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
        },
        {
          name: 'Categorías',
          icon: 'category',
          route: '/inicio/categorias',
          roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
        },
         {
          name: 'Sub Categorías',
          icon: 'category',
          route: '/inicio/sub-categoria',
          roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
        },
        {
          name: 'Unidad Medida',
          icon: 'inventory',
          route: '/inicio/unidad-medida',
          roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
        },
      ],
    },
    {
      title: 'Reportes',
      roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
      items: [
        {
          name: 'Inventario',
          icon: 'assessment',
          route: '/inicio/reportes/inventario',
          roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
        },
        {
          name: 'Movimientos',
          icon: 'swap_horiz',
          route: '/inicio/reportes/movimientos',
          roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
        },
      ],
    },
    {
      title: 'ALMACÉN',
      roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
      items: [
        {
          name: 'Ubicaciones',
          icon: 'assessment',
          route: '/inicio/ubicaciones-almacen',
          roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
        },

        {
          name: 'Movimientos',
          icon: 'swap_horiz',
          route: '/inicio/reportes/movimientos',
          roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
        },
        {
          name: 'Proveedores',
          icon: 'swap_horiz',
          route: '/inicio/proveedores',
          roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
        },
      ],
    },
    {
      title: 'GEOLOCALIZACIÓN',
      roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
      items: [
        {
          name: 'Departamentos',
          icon: 'assessment',
          route: '/inicio/departamentos',
          roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
        },
        {
          name: 'Provincias',
          icon: 'assessment',
          route: '/inicio/provincias',
          roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
        },
        {
          name: 'Distritos',
          icon: 'assessment',
          route: '/inicio/distritos',
          roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
        },
      ],
    },
  ];

  ngOnInit(): void {
    // Aquí podrías obtener el rol del usuario desde un servicio de autenticación
    // this.currentUserRole = this.authService.getCurrentUserRole();
  }

  // Filtrar secciones del menú según el rol actual
  getVisibleMenuSections(): MenuSection[] {
    return this.menuSections.filter((section) =>
      section.roles.includes(this.currentUserRole)
    );
  }

  // Filtrar items de menú según el rol actual
  getVisibleMenuItems(items: MenuItem[]): MenuItem[] {
    return items.filter((item) =>
      item.roles.includes(this.currentUserRole)
    );
  }

  // Método para cambiar el rol (para testing)
  setUserRole(role: UserRole): void {
    this.currentUserRole = role;
  }

  // Método para obtener el nombre amigable del rol
  getRoleDisplayName(role: UserRole): string {
    const roleNames = {
      [UserRole.ADMINISTRADOR]: 'Administrador',
      [UserRole.SOPORTE]: 'Soporte',
      [UserRole.SECRETARIA]: 'Secretaría',
    };
    return roleNames[role];
  }
}
