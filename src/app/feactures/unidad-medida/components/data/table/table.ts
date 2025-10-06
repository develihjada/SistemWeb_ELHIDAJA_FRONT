import { CommonModule } from '@angular/common';
import { UnidadMedida } from './../../../models/unidad-medida';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface UnidadMedidaAction {
  type: 'ver' | 'editar' | 'eliminar';
  unidadMedida: UnidadMedida;
}


@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {
  @Input() unidadesMedidas: UnidadMedida[] = [];
  @Input() loading = false;
  @Input() showActions = true;
  @Input() showPagination = true;

  @Output() accionClick = new EventEmitter<UnidadMedidaAction>();
  @Output() buscar = new EventEmitter<string>();

  onActionClick(type: 'ver' | 'editar' | 'eliminar', unidadMedida: UnidadMedida) {
    this.accionClick.emit({ type, unidadMedida });
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.buscar.emit(target.value);
  }

  trackByUnidadMedida(index: number, unidadMedida: UnidadMedida): number {
    return unidadMedida.id;
  }
}
