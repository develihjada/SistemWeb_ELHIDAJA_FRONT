import { Component, effect, inject, signal } from '@angular/core';
import { CategoriaService } from '../../service/api/categoria-service';
import { RequestListaCategoria } from '../../models/request/listaCategoria.request';
import { ResponseListaCategoria } from '../../models/response/ListaCategorias.response';
import { Categoria } from '../../models/categoria';
import { Skeleton } from '../../../../shared/components/skeleton/skeleton';
import { EmptyMessage } from '../../../../shared/components/empty-message/empty-message';
import { OptionsViews } from '../../components/filter-views/options-views/options-views';
import { CategoriaAction, Table } from '../../components/data/table/table';
import { Cards } from '../../components/data/cards/cards';

@Component({
  selector: 'app-lista-categorias-page',
  imports: [Skeleton, EmptyMessage, OptionsViews, Table, Cards],
  templateUrl: './lista-categorias-page.html',
  styleUrl: './lista-categorias-page.css',
})
export class ListaCategoriasPage {
  private apiService = inject(CategoriaService);

  req = signal<RequestListaCategoria>({ option: 1 } as RequestListaCategoria);
  categoriaData = signal<ResponseListaCategoria | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  categoriaSeleccionado = signal<Categoria | null>(null);

  constructor() {
    effect(() => {
      this.loadCategorias();
    });
  }

  private loadCategorias() {
    this.loading.set(true);
    this.error.set(null);

    this.apiService.ListarCategoria(this.req()).subscribe({
      next: response => {
        this.categoriaData.set(response);
        this.loading.set(false);
      },
      error: err => {
        this.error.set('Error al cargar los usuarios');
        this.loading.set(false);
        console.error('Error:', err);
      },
    });
  }

  get categoriaResource() {
    return {
      value: () => this.categoriaData(),
      loading: () => this.loading(),
      error: () => this.error(),
    };
  }

  // Método para manejar los tipos de vista
  dataView: 'card' | 'tabla' = 'tabla';

  onTipoVista(action: { type: 'tabla' | 'card' }) {
    console.log('Tipo de vista seleccionado:', action.type);
    this.dataView = action.type;
  }

  // Método para manejar las acciones de la tabla
  onAccionTabla(action: CategoriaAction) {
    switch (
      action.type
      // case 'ver':
      //   this.verDetalleCategoria(action.categoria);
      //   break;
      // case 'editar':
      //   this.editarCategoria(action.categoria);
      //   break;
      // case 'eliminar':
      //   this.eliminarCategoria(action.categoria);
      //   break;
    ) {
    }
  }

  // Método para buscar categorías
  onBuscarCategoria(termino: string) {
    console.log('Buscar:', termino);
    // Aquí implementarías la lógica de búsqueda
  }

  onCategoriaGuardada(nuevaCategoria: Categoria) {
    console.log('Nueva categoría guardada:', nuevaCategoria);
    this.loadCategorias();
  }

  onModalCerrado() {
    console.log('Modal cerrado');
  }
}
