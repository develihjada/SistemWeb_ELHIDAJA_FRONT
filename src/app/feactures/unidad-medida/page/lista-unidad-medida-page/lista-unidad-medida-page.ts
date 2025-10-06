import { Component, effect, inject, signal } from '@angular/core';
import { UnidadMedidaService } from '../../service/api/unidad-medida-service';
import { RequestListaUnidadMedida } from '../../models/request/listaUnidadMedida.request';
import { ResponseListaUnidadMedida } from '../../models/response/listaUnidadMedida.response';
import { UnidadMedida } from '../../models/unidad-medida';
import { Skeleton } from '../../../../shared/components/skeleton/skeleton';
import { EmptyMessage } from '../../../../shared/components/empty-message/empty-message';
import { OptionsViews } from '../../components/filter-views/options-views/options-views';
import { Table, UnidadMedidaAction } from "../../components/data/table/table";
import { Cards } from "../../components/data/cards/cards";

@Component({
  selector: 'app-lista-unidad-medida-page',
  imports: [Skeleton, EmptyMessage, OptionsViews, Table, Cards],
  templateUrl: './lista-unidad-medida-page.html',
  styleUrl: './lista-unidad-medida-page.css',
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
      next: response => {
        this.unidadesData.set(response);
        this.loading.set(false);
      },
      error: err => {
        this.error.set('Error al cargar las unidades');
        this.loading.set(false);
        console.error('Error:', err);
      },
    });
  }

  get unidadesResource() {
    return {
      value: () => this.unidadesData(),
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
  onAccionTabla(action: UnidadMedidaAction) {
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
  onBuscarUnidadMedida(termino: string) {
    console.log('Buscar:', termino);
    // Aquí implementarías la lógica de búsqueda
  }

  // onCategoriaGuardada(nuevaCategoria: Categoria) {
  //   console.log('Nueva categoría guardada:', nuevaCategoria);
  //   this.loadCategorias();
  // }

  // onModalCerrado() {
  //   console.log('Modal cerrado');
  // }
}
