import { Component, effect, inject, signal } from '@angular/core';
import { SubcategoriaService } from '../../service/api/subcategoria-service';
import { RequestListadoSubCategoria } from '../../models/request/listadoSubCategoria.request';
import { ResponseListaSubCategoria } from '../../models/response/listadoSubCategoria.response';
import { SubCategoria } from '../../models/subcategoria';
import { Skeleton } from "../../../../shared/components/skeleton/skeleton";
import { EmptyMessage } from "../../../../shared/components/empty-message/empty-message";
import { OptionsViews } from "../../../almacenes/components/filter-views/options-views/options-views";
import { SubCategoriaAction, Table } from "../../components/data/table/table";
import { Cards } from "../../components/data/cards/cards";

@Component({
  selector: 'app-lista-subcategoria-page',
  imports: [Skeleton, EmptyMessage, OptionsViews, Table, Cards],
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

  // Método para manejar los tipos de vista
  dataView: 'card' | 'tabla' = 'tabla';

  onTipoVista(action: { type: 'tabla' | 'card' }) {
    console.log('Tipo de vista seleccionado:', action.type);
    this.dataView = action.type;
  }

  // Método para manejar las acciones de la tabla
    onAccionTabla(action: SubCategoriaAction) {
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

    // onCategoriaGuardada(nuevaSubCategoria: SubCategoria) {
    //   console.log('Nueva subcategoría guardada:', nuevaSubCategoria);
    //   this.loadUnidades();
    // }

    // onModalCerrado() {
    //   console.log('Modal cerrado');
    // }


}
