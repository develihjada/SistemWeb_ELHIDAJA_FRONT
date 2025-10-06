import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SubCategoria } from '../../../models/subcategoria';
import { CommonModule } from '@angular/common';

export interface SubCategoriaAction {
  type: 'ver' | 'editar' | 'eliminar';
  subcategoria: SubCategoria;
}

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {
  @Input() subcategorias: SubCategoria[] = [];
  @Input() loading = false;
  @Input() showActions = true;
  @Input() showPagination = true;

  @Output() accionClick = new EventEmitter<SubCategoriaAction>();
  @Output() buscar = new EventEmitter<string>();

  onActionClick(type: 'ver' | 'editar' | 'eliminar', subcategoria: SubCategoria) {
    this.accionClick.emit({ type, subcategoria });
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.buscar.emit(target.value);
  }

  trackBySubCategoria(index: number, subcategoria: SubCategoria): number {
    return subcategoria.id;
  }
}
