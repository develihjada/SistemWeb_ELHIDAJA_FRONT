import { Departamento } from './../../../models/departamento';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DepartamentoAction {
  type: 'ver' | 'editar' | 'eliminar';
  departamento: Departamento;
}

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {
  @Input() departamentos: Departamento[] = [];
  @Input() loading = false;
  @Input() showActions = true;
  @Input() showPagination = true;

  @Output() accionClick = new EventEmitter<DepartamentoAction>();
  @Output() buscar = new EventEmitter<string>();

  onActionClick(type: 'ver' | 'editar' | 'eliminar', departamento: Departamento) {
    this.accionClick.emit({ type, departamento });
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.buscar.emit(target.value);
  }

  trackByDepartamento(index: number, departamento: Departamento): number {
    return departamento.id;
  }
}
