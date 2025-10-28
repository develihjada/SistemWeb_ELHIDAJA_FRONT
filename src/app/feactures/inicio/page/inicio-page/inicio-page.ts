import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Necesario para @for y @if

// ===================================
// INTERFACES Y ENUMS
// ===================================

interface DashboardModuleCard {
  title: string;
  description: string;
  icon: string;
  route: string;
  roles: UserRole[];
}

enum UserRole {
  ADMINISTRADOR = 'administrador',
  SECRETARIA = 'secretaria',
  SOPORTE = 'soporte',
}

@Component({
  selector: 'app-inicio-page',
  imports: [RouterLink, CommonModule],
  templateUrl: './inicio-page.html',
  styleUrl: './inicio-page.css',
  standalone: true
})
export class InicioPage implements OnInit {
  private readonly router = inject(Router);

  // Simulación del rol actual del usuario (CAMBIA ESTO PARA PRUEBAS)
  currentUserRole: UserRole = UserRole.ADMINISTRADOR;

  dashboardModules: DashboardModuleCard[] = [
    {
        title: 'Logística y Almacén',
        description: 'Gestión completa de inventarios, movimientos (entradas/salidas), y administración de ubicaciones.',
        icon: 'warehouse',
        route: '/inicio/logistica-almacen',
        roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE, UserRole.SECRETARIA],
    },
    {
        title: 'Maestros de Productos',
        description: 'Catálogo centralizado de artículos, categorías, subcategorías y unidades de medida.',
        icon: 'inventory',
        route: '/inicio/maestros-productos',
        roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE],
    },
    {
        title: 'Servicios y Proyectos',
        description: 'Gestión de clientes, seguimiento de proyectos, y vinculación directa con la facturación.',
        icon: 'assignment',
        route: '/inicio/proyectos',
        roles: [UserRole.ADMINISTRADOR, UserRole.SECRETARIA],
    },
    {
        title: 'Facturación',
        description: 'Emisión, registro y seguimiento de documentos de venta y cuentas por cobrar del negocio.',
        icon: 'receipt',
        route: '/inicio/facturacion/documentos',
        roles: [UserRole.ADMINISTRADOR, UserRole.SECRETARIA],
    },
    {
        title: 'Reportes y Analíticas',
        description: 'Informes clave sobre el inventario, movimientos históricos y desempeño del sistema.',
        icon: 'bar_chart',
        route: '/inicio/reportes-analiticos',
        roles: [UserRole.ADMINISTRADOR, UserRole.SOPORTE, UserRole.SECRETARIA],
    },
    {
        title: 'Administración y Configuración',
        description: 'Gestión de usuarios, roles, permisos, áreas, puestos y datos maestros globales (geolocalización).',
        icon: 'settings',
        route: '/inicio/administrativo-configuraciones',
        roles: [UserRole.ADMINISTRADOR],
    },
  ];

  ngOnInit(): void {
      // Aquí se podría cargar el rol del usuario desde un servicio real.
      // this.currentUserRole = this.authService.getCurrentUserRole();
  }

  /**
   * Filtra las tarjetas de módulo según el rol actual del usuario.
   */
  getVisibleModuleCards(): DashboardModuleCard[] {
    return this.dashboardModules.filter((card) =>
      card.roles.includes(this.currentUserRole)
    );
  }

  /**
   * Obtiene el nombre amigable del rol.
   */
  getRoleDisplayName(role: UserRole): string {
    const roleNames = {
      [UserRole.ADMINISTRADOR]: 'Administrador',
      [UserRole.SOPORTE]: 'Soporte',
      [UserRole.SECRETARIA]: 'Secretaría',
    };
    return roleNames[role];
  }

  /**
   * Método de prueba para cambiar el rol (opcional, para desarrollo).
   */
  setUserRole(role: UserRole): void {
    this.currentUserRole = role;
  }
}
