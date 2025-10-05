import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UbicacionesAlmacen } from '../../../models/UbicacionesAlmacen';
import { CommonModule } from '@angular/common';

export interface UbicacionAction {
  type: 'ver' | 'editar' | 'eliminar';
  ubicaciones: UbicacionesAlmacen;
}

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {
  @Input() ubicaciones: UbicacionesAlmacen[] = [];
  @Input() loading = false;
  @Input() showActions = true;
  @Input() showPagination = true;

  @Output() accionClick = new EventEmitter<UbicacionAction>();
  @Output() buscar = new EventEmitter<string>();

  onActionClick(type: 'ver' | 'editar' | 'eliminar', ubicaciones: UbicacionesAlmacen) {
    this.accionClick.emit({ type, ubicaciones });
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.buscar.emit(target.value);
  }

  trackByUbicacion(index: number, ubicacion: UbicacionesAlmacen): number {
    return ubicacion.id;
  }
}
