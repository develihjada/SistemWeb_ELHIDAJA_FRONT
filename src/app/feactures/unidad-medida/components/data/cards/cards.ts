import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UnidadMedida } from '../../../models/unidad-medida';
import { UnidadMedidaAction } from '../table/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {
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
