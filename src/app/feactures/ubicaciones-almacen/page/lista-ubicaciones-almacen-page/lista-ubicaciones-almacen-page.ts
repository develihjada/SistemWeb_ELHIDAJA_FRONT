import { RequestListaUbicacionesAlmacen } from '../../models/request/listaUbicacionesAlmacen.request';
import { ResponseListaUbicacionesAlmacen } from '../../models/response/listaUbicacionesAlmacen.response';
import { UbicacionesAlmacen } from '../../models/UbicacionesAlmacen';
import { UbicacionesAlmacenesService } from './../../service/api/ubicaciones-almacenes-service';
import { Component, effect, inject, signal } from '@angular/core';
import { Skeleton } from '../../../../shared/components/skeleton/skeleton';
import { EmptyMessage } from '../../../../shared/components/empty-message/empty-message';
import { Table, UbicacionAction } from '../../components/data/table/table';
import { Cards } from '../../components/data/cards/cards';
import { OptionsViews } from '../../components/filter-views/options-views/options-views';

@Component({
  selector: 'app-lista-ubicaciones-almacen-page',
  imports: [Skeleton, EmptyMessage, Table, Cards, OptionsViews],
  templateUrl: './lista-ubicaciones-almacen-page.html',
  styleUrl: './lista-ubicaciones-almacen-page.css',
})
export class ListaUbicacionesAlmacenPage {
  private apiService = inject(UbicacionesAlmacenesService);

  req = signal<RequestListaUbicacionesAlmacen>({ option: 1 } as RequestListaUbicacionesAlmacen);
  unidadesData = signal<ResponseListaUbicacionesAlmacen | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  unidadSeleccionada = signal<UbicacionesAlmacen | null>(null);

  constructor() {
    effect(() => {
      this.loadUnidades();
    });
  }

  private loadUnidades() {
    this.loading.set(true);
    this.error.set(null);

    this.apiService.ListarUbicacionesAlmacen(this.req()).subscribe({
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

  get ubicacionesAlmacenResource() {
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
  onAccionTabla(action: UbicacionAction) {
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

  // Método para buscar ubicaciones
  onBuscarUbicacion(termino: string) {
    console.log('Buscar:', termino);
    // Aquí implementarías la lógica de búsqueda
  }

  //  onCategoriaGuardada(nuevaCategoria: Categoria) {
  //     console.log('Nueva categoría guardada:', nuevaCategoria);
  //     this.loadUnidades();
  //   }

  //   onModalCerrado() {
  //   console.log('Modal cerrado');
  // }
}
