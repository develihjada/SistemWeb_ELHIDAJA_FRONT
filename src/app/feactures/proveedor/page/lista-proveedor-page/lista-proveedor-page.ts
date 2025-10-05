import { Component, effect, inject, signal } from '@angular/core';
import { ProveedorService } from '../../service/api/proveedor-service';
import { ResponseListaProveedores } from '../../models/response/listaProveedores.response';
import { RequestListaProveedores } from '../../models/request/listaProveedores.request';
import { Proveedores } from '../../models/proveedor';
import { Skeleton } from "../../../../shared/components/skeleton/skeleton";
import { EmptyMessage } from "../../../../shared/components/empty-message/empty-message";
import { OptionsViews } from "../../components/filter-views/options-views/options-views";
import { ProveedorAction, Table } from "../../components/data/table/table";
import { Cards } from "../../components/data/cards/cards";

@Component({
  selector: 'app-lista-proveedor-page',
  imports: [Skeleton, EmptyMessage, OptionsViews, Table, Cards],
  templateUrl: './lista-proveedor-page.html',
  styleUrl: './lista-proveedor-page.css'
})
export class ListaProveedorPage {
  private apiService = inject(ProveedorService);

  req = signal<RequestListaProveedores>({ option: 1 } as RequestListaProveedores);
  proveedoresData = signal<ResponseListaProveedores | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  proveedorSeleccionado = signal<Proveedores | null>(null);

  constructor() {
    effect(() => {
      this.loadProveedores();
    });
  }

  private loadProveedores() {
    this.loading.set(true);
    this.error.set(null);

    this.apiService.ListarProveedores(this.req()).subscribe({
      next: (response) => {
        this.proveedoresData.set(response);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar los proveedores');
        this.loading.set(false);
        console.error('Error:', err);
      }
    });
  }

  get proveedorResource() {
    return {
      value: () => this.proveedoresData(),
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
      onAccionTabla(action: ProveedorAction) {
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

        // Método para buscar proveedores
    onBuscarProveedor(termino: string) {
      console.log('Buscar:', termino);
      // Aquí implementarías la lógica de búsqueda
    }

}
