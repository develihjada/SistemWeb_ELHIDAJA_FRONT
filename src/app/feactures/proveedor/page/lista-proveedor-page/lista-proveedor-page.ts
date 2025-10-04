import { Component, effect, inject, signal } from '@angular/core';
import { ProveedorService } from '../../service/api/proveedor-service';
import { ResponseListaProveedores } from '../../models/response/listaProveedores.response';
import { RequestListaProveedores } from '../../models/request/listaProveedores.request';
import { Proveedores } from '../../models/proveedor';

@Component({
  selector: 'app-lista-proveedor-page',
  imports: [],
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
}
