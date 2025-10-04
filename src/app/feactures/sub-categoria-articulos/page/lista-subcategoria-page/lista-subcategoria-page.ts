import { Component, effect, inject, signal } from '@angular/core';
import { SubcategoriaService } from '../../service/api/subcategoria-service';
import { RequestListadoSubCategoria } from '../../models/request/listadoSubCategoria.request';
import { ResponseListaSubCategoria } from '../../models/response/listadoSubCategoria.response';
import { SubCategoria } from '../../models/subcategoria';

@Component({
  selector: 'app-lista-subcategoria-page',
  imports: [],
  templateUrl: './lista-subcategoria-page.html',
  styleUrl: './lista-subcategoria-page.css'
})
export class ListaSubcategoriaPage {
  private apiService = inject(SubcategoriaService);

  req = signal<RequestListadoSubCategoria>({ option: 1 } as RequestListadoSubCategoria);
  unidadesData = signal<ResponseListaSubCategoria | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  unidadSeleccionada = signal<SubCategoria | null>(null);

  constructor() {
    effect(() => {
      this.loadUnidades();
    });
  }

  private loadUnidades() {
    this.loading.set(true);
    this.error.set(null);

    this.apiService.ListarSubCategoria(this.req()).subscribe({
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

  get subCategoriaResource() {
    return {
      value: () => this.unidadesData(),
      loading: () => this.loading(),
      error: () => this.error()
    };
  }
}
