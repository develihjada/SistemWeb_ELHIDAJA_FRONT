import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from '../../../../categoria/models/categoria';
import { Proveedores } from '../../../models/proveedor';
import { CommonModule } from '@angular/common';

export interface ProveedorAction {
  type: 'ver' | 'editar' | 'eliminar';
  proveedor: Proveedores;
}

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  @Input() proveedores: Proveedores[] = [];
  @Input() loading = false;
  @Input() showActions = true;
  @Input() showPagination = true;

  @Output() accionClick = new EventEmitter<ProveedorAction>();
  @Output() buscar = new EventEmitter<string>();

  onActionClick(type: 'ver' | 'editar' | 'eliminar', proveedor: Proveedores) {
    this.accionClick.emit({ type, proveedor });
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.buscar.emit(target.value);
  }

  trackByProveedor(index: number, proveedor: Proveedores): number {
    return proveedor.id;
  }
}
