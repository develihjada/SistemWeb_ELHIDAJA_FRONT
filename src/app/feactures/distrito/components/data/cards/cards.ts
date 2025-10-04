import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { Distrito } from '../../../models/distrito';
import { DistritoAction } from '../table/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {
  @Input()
  set distrito(value: Distrito[]) {
    this.distritoSignal.set(value);
  }
  get distrito(): Distrito[] {
    return this.distritoSignal();
  }

  @Input() loading = false;
  @Input() showActions = true;
  @Input() showPagination = true;

  @Output() accionClick = new EventEmitter<DistritoAction>();
  @Output() buscar = new EventEmitter<string>();

  private distritoSignal = signal<Distrito[]>([]);

  // Computed signal para agrupar distritos por provincia incluyendo departamento
  distritoPorProvinciaAndDepartamento = computed(() => {
    const distritos = this.distritoSignal();
    const gruposMap = new Map<string, { distritos: Distrito[], departamento: string }>();

    distritos.forEach(distrito => {
      const provincia = distrito.provincia;
      if (!gruposMap.has(provincia)) {
        gruposMap.set(provincia, {
          distritos: [],
          departamento: distrito.departamento
        });
      }
      gruposMap.get(provincia)!.distritos.push(distrito);
    });

    // Convertir Map a array de objetos para mejor manejo en el template
    return Array.from(gruposMap.entries()).map(([provincia, data]) => ({
      provincia,
      departamento: data.departamento,
      distritos: data.distritos.sort((a, b) => a.nombre.localeCompare(b.nombre))
    })).sort((a, b) => a.provincia.localeCompare(b.provincia));
  });

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
