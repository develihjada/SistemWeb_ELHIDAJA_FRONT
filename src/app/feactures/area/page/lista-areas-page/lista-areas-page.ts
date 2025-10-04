import { Component, effect, inject, signal } from '@angular/core';
import { AreasService } from '../../service/api/areas-service';
import { ResponseListaAreas } from '../../models/response/ListaAreas.response';
import { RequestListaAreas } from '../../models/request/listaAreas.request';
import { Areas } from '../../models/areas';


@Component({
  selector: 'app-lista-areas-page',
  imports: [],
  templateUrl: './lista-areas-page.html',
  styleUrl: './lista-areas-page.css'
})
export class ListaAreasPage {
  private apiService = inject(AreasService);

  req = signal<RequestListaAreas>({ option: 1 } as RequestListaAreas);
  areasData = signal<ResponseListaAreas | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  areaSeleccionada = signal<Areas | null>(null);

  constructor() {
    effect(() => {
      this.loadAreas();
    });
  }

  private loadAreas() {
    this.loading.set(true);
    this.error.set(null);

    this.apiService.ListarAreas(this.req()).subscribe({
      next: (response) => {
        this.areasData.set(response);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar las áreas');
        this.loading.set(false);
        console.error('Error:', err);
      }
    });
  }

  get areasResource() {
    return {
      value: () => this.areasData(),
      loading: () => this.loading(),
      error: () => this.error()
    };
  }
}
