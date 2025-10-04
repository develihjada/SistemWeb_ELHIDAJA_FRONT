import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Almacenes } from '../../../models/almacenes.model';
import { CommonModule } from '@angular/common';

export interface AlmacenAction {
  type: 'ver' | 'editar' | 'eliminar';
  almacen: Almacenes;
}

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {
@Input() almacenes: Almacenes[] = [];
  @Input() loading = false;
  @Input() showActions = true;
  @Input() showPagination = true;

  @Output() accionClick = new EventEmitter<AlmacenAction>();
  @Output() buscar = new EventEmitter<string>();

  onActionClick(type: 'ver' | 'editar' | 'eliminar', almacen: Almacenes) {
    this.accionClick.emit({ type, almacen });
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.buscar.emit(target.value);
  }

  trackByAlmacen(index: number, almacen: Almacenes): number {
    return almacen.id_almacen;
  }
}
