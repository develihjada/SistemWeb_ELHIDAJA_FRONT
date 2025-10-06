import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SubCategoria } from '../../../models/subcategoria';
import { SubCategoriaAction } from '../table/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {
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
