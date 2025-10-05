import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from '../../../models/categoria';
import { CommonModule } from '@angular/common';

export interface CategoriaAction {
  type: 'ver' | 'editar' | 'eliminar';
  categoria: Categoria;
}

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {
   @Input() categorias: Categoria[] = [];
    @Input() loading = false;
    @Input() showActions = true;
    @Input() showPagination = true;

    @Output() accionClick = new EventEmitter<CategoriaAction>();
    @Output() buscar = new EventEmitter<string>();

    onActionClick(type: 'ver' | 'editar' | 'eliminar', categoria: Categoria) {
      this.accionClick.emit({ type, categoria });
    }

    onSearch(event: Event) {
      const target = event.target as HTMLInputElement;
      this.buscar.emit(target.value);
    }

    trackByCategoria(index: number, categoria: Categoria): number {
      return categoria.id;
    }
}
