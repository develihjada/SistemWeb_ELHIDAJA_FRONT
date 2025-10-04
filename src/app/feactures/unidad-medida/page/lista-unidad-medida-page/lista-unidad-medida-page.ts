import { Component, effect, inject, signal } from '@angular/core';
import { UnidadMedidaService } from '../../service/api/unidad-medida-service';
import { RequestListaUnidadMedida } from '../../models/request/listaUnidadMedida.request';
import { ResponseListaUnidadMedida } from '../../models/response/listaUnidadMedida.response';
import { UnidadMedida } from '../../models/unidad-medida';

@Component({
  selector: 'app-lista-unidad-medida-page',
  imports: [],
  templateUrl: './lista-unidad-medida-page.html',
  styleUrl: './lista-unidad-medida-page.css'
})
export class ListaUnidadMedidaPage {
  private apiService = inject(UnidadMedidaService);

  req = signal<RequestListaUnidadMedida>({ option: 1 } as RequestListaUnidadMedida);
  unidadesData = signal<ResponseListaUnidadMedida | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  unidadSeleccionada = signal<UnidadMedida | null>(null);

  constructor() {
    effect(() => {
      this.loadUnidades();
    });
  }

  private loadUnidades() {
    this.loading.set(true);
    this.error.set(null);

    this.apiService.ListarUnidadMedida(this.req()).subscribe({
      next: (response) => {
        this.unidadesData.set(response);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar las unidades');
        this.loading.set(false);
        console.error('Error:', err);
      }
    });
  }

  get unidadesResource() {
    return {
      value: () => this.unidadesData(),
      loading: () => this.loading(),
      error: () => this.error()
    };
  }
}
