import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Proveedores } from '../../../models/proveedor';

export interface ProveedorAction {
  type: 'ver' | 'editar' | 'eliminar';
  proveedor: Proveedores;
}

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {
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
