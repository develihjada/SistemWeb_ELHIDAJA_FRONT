import { Component, effect, inject, signal } from '@angular/core';
import { ArticulosService } from '../../service/api/articulos-service';
import { RequestListaArticulos } from '../../models/request/listaArticulos.request';
import { ResponseListaArticulos } from '../../models/response/ListaArticulos.response';
import { Articulos } from '../../models/Articulos';

@Component({
  selector: 'app-lista-articulos-page',
  imports: [],
  templateUrl: './lista-articulos-page.html',
  styleUrl: './lista-articulos-page.css'
})
export class ListaArticulosPage {
  private apiService = inject(ArticulosService);

  req = signal<RequestListaArticulos>({ option: 1 } as RequestListaArticulos);
  articulosData = signal<ResponseListaArticulos | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  articuloSeleccionado = signal<Articulos | null>(null);

  constructor() {
    effect(() => {
      this.loadArticulos();
    });
  }

  private loadArticulos() {
    this.loading.set(true);
    this.error.set(null);

    this.apiService.ListarArticulos(this.req()).subscribe({
      next: (response) => {
        this.articulosData.set(response);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar los articulos');
        this.loading.set(false);
        console.error('Error:', err);
      }
    });
  }

  get articuloResource() {
    return {
      value: () => this.articulosData(),
      loading: () => this.loading(),
      error: () => this.error()
    };
  }
}
