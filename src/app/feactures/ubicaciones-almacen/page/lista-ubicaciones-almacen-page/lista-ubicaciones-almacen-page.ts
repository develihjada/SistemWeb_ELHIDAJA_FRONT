import { RequestListaUbicacionesAlmacen } from '../../models/request/listaUbicacionesAlmacen.request';
import { ResponseListaUbicacionesAlmacen } from '../../models/response/listaUbicacionesAlmacen.response';
import { UbicacionesAlmacen } from '../../models/UbicacionesAlmacen';
import { UbicacionesAlmacenesService } from './../../service/api/ubicaciones-almacenes-service';
import { Component, effect, inject, signal } from '@angular/core';

@Component({
  selector: 'app-lista-ubicaciones-almacen-page',
  imports: [],
  templateUrl: './lista-ubicaciones-almacen-page.html',
  styleUrl: './lista-ubicaciones-almacen-page.css'
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

  get ubicacionesAlmacenResource() {
    return {
      value: () => this.unidadesData(),
      loading: () => this.loading(),
      error: () => this.error()
    };
  }
}
