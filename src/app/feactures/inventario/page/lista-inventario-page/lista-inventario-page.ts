import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-inventario-page',
  imports: [NgClass, CommonModule, FormsModule],
  templateUrl: './lista-inventario-page.html',
  styleUrl: './lista-inventario-page.css',
  standalone: true
})
export class ListaInventarioPage {

  // Datos de ejemplo para la tabla (simulación de DOCUMENTOS DE INVENTARIO)
  documentosInventario = [
    { id: 'INV-001', tipo: 'Toma Física', fecha: '2025-10-25', almacen: 'Central', estado: 'Pendiente', responsable: 'Javier L.' },
    { id: 'INV-002', tipo: 'Ajuste', fecha: '2025-10-24', almacen: 'Sucursal A', estado: 'Aprobado', responsable: 'Marta G.' },
    { id: 'INV-003', tipo: 'Toma Física', fecha: '2025-10-20', almacen: 'Principal', estado: 'Cerrado', responsable: 'Javier L.' },
    // ... más documentos ...
  ];

  // Variables para filtros (simulación)
  filtroAlmacen: string = 'Todos';
  busqueda: string = '';

  aplicarFiltros() {
    console.log('Filtros aplicados:', this.filtroAlmacen, this.busqueda);
    // Lógica real de filtrado de datos aquí
  }

  crearNuevoInventario() {
    alert('Navegando a la página de creación de nuevo documento de inventario...');
    // router.navigate(['/ruta/para/crear/inventario']);
  }

  exportarExcel() {
    alert('Exportando listado de documentos a Excel...');
  }
}
