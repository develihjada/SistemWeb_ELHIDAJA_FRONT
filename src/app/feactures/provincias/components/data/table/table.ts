import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Provincias } from '../../../models/provincias';
import { CommonModule } from '@angular/common';

export interface ProvinciaAction {
  type: 'ver' | 'editar' | 'eliminar';
  provincias: Provincias;
}

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {
@Input() provincias: Provincias[] = [];
  @Input() loading = false;
  @Input() showActions = true;
  @Input() showPagination = true;

  @Output() accionClick = new EventEmitter<ProvinciaAction>();
  @Output() buscar = new EventEmitter<string>();

  onActionClick(type: 'ver' | 'editar' | 'eliminar', provincias: Provincias) {
    this.accionClick.emit({ type, provincias });
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.buscar.emit(target.value);
  }

  trackByProvincias(index: number, provincias: Provincias): number {
    return provincias.id;
  }
}
