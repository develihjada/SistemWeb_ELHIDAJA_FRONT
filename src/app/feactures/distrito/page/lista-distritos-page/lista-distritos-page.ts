import { Component, effect, inject, signal } from '@angular/core';
import { DistritoService } from '../../service/api/distrito-service';
import { RequestListaDistrito } from '../../models/request/listaDistrito.request';
import { ResponseListaDistrito } from '../../models/response/ListaDistrito.response';
import { Distrito } from '../../models/distrito';
import { Skeleton } from "../../../../shared/components/skeleton/skeleton";
import { EmptyMessage } from "../../../../shared/components/empty-message/empty-message";
import { OptionsViews } from "../../components/filter-views/options-views/options-views";
import { DistritoAction, Table } from "../../components/data/table/table";
import { Cards } from "../../components/data/cards/cards";

@Component({
  selector: 'app-lista-distritos-page',
  imports: [Skeleton, EmptyMessage, OptionsViews, Table, Cards],
  templateUrl: './lista-distritos-page.html',
  styleUrl: './lista-distritos-page.css'
})
export class ListaDistritosPage {
  private apiService = inject(DistritoService);

  req = signal<RequestListaDistrito>({ option: 1 } as RequestListaDistrito);
  distritoData = signal<ResponseListaDistrito | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  proveedorSeleccionado = signal<Distrito | null>(null);

  constructor() {
    effect(() => {
      this.loadDistritos();
    });
  }

  private loadDistritos() {
    this.loading.set(true);
    this.error.set(null);

    this.apiService.ListarDistritos(this.req()).subscribe({
      next: (response) => {
        this.distritoData.set(response);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar los distritos');
        this.loading.set(false);
        console.error('Error:', err);
      }
    });
  }

  get distritoResource() {
    return {
      value: () => this.distritoData(),
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
      onAccionTabla(action: DistritoAction) {
        switch (
          action.type
          // case 'ver':
          //   this.verDetalleDistrito(action.distrito);
          //   break;
          // case 'editar':
          //   this.editarDistrito(action.distrito);
          //   break;
          // case 'eliminar':
          //   this.eliminarDistrito(action.distrito);
          //   break;
        ) {
        }
      }

       // Método para buscar distritos
      onBuscarDistritos(termino: string) {
        console.log('Buscar:', termino);
        // Aquí implementarías la lógica de búsqueda
      }
}
