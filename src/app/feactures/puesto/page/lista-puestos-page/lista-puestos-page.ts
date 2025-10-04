import { Component, effect, inject, signal } from '@angular/core';
import { PuestoService } from '../../service/api/puesto-service';
import { RequestListaPuestos } from '../../models/request/listaPuesto.request';
import { ResponseListaPuesto } from '../../models/response/listaPuesto.response';
import { Puesto } from '../../models/puesto';

@Component({
  selector: 'app-lista-puestos-page',
  imports: [],
  templateUrl: './lista-puestos-page.html',
  styleUrl: './lista-puestos-page.css'
})
export class ListaPuestosPage {
  private apiService = inject(PuestoService);

  req = signal<RequestListaPuestos>({ option: 1 } as RequestListaPuestos);
  puestosData = signal<ResponseListaPuesto | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  puestoSeleccionado = signal<Puesto | null>(null);

  constructor() {
    effect(() => {
      this.loadPuestos();
    });
  }

  private loadPuestos() {
    this.loading.set(true);
    this.error.set(null);

    this.apiService.ListarPuesto(this.req()).subscribe({
      next: (response) => {
        this.puestosData.set(response);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar los puestos');
        this.loading.set(false);
        console.error('Error:', err);
      }
    });
  }

  get puestoResource() {
    return {
      value: () => this.puestosData(),
      loading: () => this.loading(),
      error: () => this.error()
    };
  }
}
