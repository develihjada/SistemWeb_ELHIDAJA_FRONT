import { CommonModule } from '@angular/common';
import { ProvinciaAction } from '../table/table';
import { Provincias } from './../../../models/provincias';
import { Component, EventEmitter, Input, Output, computed, signal } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {
  @Input()
  set provincias(value: Provincias[]) {
    this.provinciasSignal.set(value);
  }
  get provincias(): Provincias[] {
    return this.provinciasSignal();
  }

  @Input() loading = false;
  @Input() showActions = true;
  @Input() showPagination = true;

  @Output() accionClick = new EventEmitter<ProvinciaAction>();
  @Output() buscar = new EventEmitter<string>();

  private provinciasSignal = signal<Provincias[]>([]);

  // Computed signal para agrupar provincias por departamento
  provinciasPorDepartamento = computed(() => {
    const provincias = this.provinciasSignal();
    const gruposMap = new Map<string, Provincias[]>();

    provincias.forEach(provincia => {
      const departamento = provincia.departamento;
      if (!gruposMap.has(departamento)) {
        gruposMap.set(departamento, []);
      }
      gruposMap.get(departamento)!.push(provincia);
    });

    // Convertir Map a array de objetos para mejor manejo en el template
    return Array.from(gruposMap.entries()).map(([departamento, provincias]) => ({
      departamento,
      provincias: provincias.sort((a, b) => a.nombre.localeCompare(b.nombre))
    })).sort((a, b) => a.departamento.localeCompare(b.departamento));
  });

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
