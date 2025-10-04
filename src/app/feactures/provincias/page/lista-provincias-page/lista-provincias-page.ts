import { Component, effect, inject, signal } from '@angular/core';
import { ProvinciaService } from '../../service/api/provincia-service';
import { RequestListaProvincias } from '../../models/request/ListaProvincias.request';
import { ResponseListaProvincias } from '../../models/response/ListProvincias.response';
import { Provincias } from '../../models/provincias';
import { Skeleton } from "../../../../shared/components/skeleton/skeleton";
import { OptionsViews } from "../../components/filter-views/options-views/options-views";
import { ProvinciaAction, Table } from "../../components/data/table/table";
import { EmptyMessage } from "../../../../shared/components/empty-message/empty-message";
import { Cards } from "../../components/data/cards/cards";

@Component({
  selector: 'app-lista-provincias-page',
  imports: [Skeleton, OptionsViews, Table, EmptyMessage, Cards],
  templateUrl: './lista-provincias-page.html',
  styleUrl: './lista-provincias-page.css'
})
export class ListaProvinciasPage {
 private apiService = inject(ProvinciaService);

  req = signal<RequestListaProvincias>({ option: 1 } as RequestListaProvincias);
  provinciasData = signal<ResponseListaProvincias | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  provinciasSeleccionado = signal<Provincias | null>(null);

  constructor() {
    effect(() => {
      this.loadProvincias();
    });
  }

  private loadProvincias() {
    this.loading.set(true);
    this.error.set(null);

    this.apiService.ListarProvincias(this.req()).subscribe({
      next: (response) => {
        this.provinciasData.set(response);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar las provincias');
        this.loading.set(false);
        console.error('Error:', err);
      }
    });
  }

  get provinciasResource() {
    return {
      value: () => this.provinciasData(),
      loading: () => this.loading(),
      error: () => this.error()
    };
  }

  dataView: 'card' | 'tabla' = 'tabla';

  onTipoVista(action: { type: 'tabla' | 'card' }) {
    console.log('Tipo de vista seleccionado:', action.type);
    this.dataView = action.type;
  }

  // Método para manejar las acciones de la tabla
    onAccionTabla(action: ProvinciaAction) {
      switch (
        action.type
        // case 'ver':
        //   this.verDetalleProvincia(action.provincia);
        //   break;
        // case 'editar':
        //   this.editarProvincia(action.provincia);
        //   break;
        // case 'eliminar':
        //   this.eliminarProvincia(action.provincia);
        //   break;
      ) {
      }
    }

     // Método para buscar almacenes
    onBuscarDepartamentos(termino: string) {
      console.log('Buscar:', termino);
      // Aquí implementarías la lógica de búsqueda
    }
}
