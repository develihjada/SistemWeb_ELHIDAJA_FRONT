import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Distrito } from '../../../models/distrito';
import { CommonModule } from '@angular/common';

export interface DistritoAction {
  type: 'ver' | 'editar' | 'eliminar';
  distrito: Distrito;
}

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {
@Input() distritos: Distrito[] = [];
  @Input() loading = false;
  @Input() showActions = true;
  @Input() showPagination = true;

  @Output() accionClick = new EventEmitter<DistritoAction>();
  @Output() buscar = new EventEmitter<string>();

  onActionClick(type: 'ver' | 'editar' | 'eliminar', distrito: Distrito) {
    this.accionClick.emit({ type, distrito });
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.buscar.emit(target.value);
  }

  trackByDistritos(index: number, distrito: Distrito): number {
    return distrito.id;
  }
}
