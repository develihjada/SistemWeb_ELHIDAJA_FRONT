import { Component, effect, inject, signal } from '@angular/core';
import { RequestListaUsuarios } from '../../models/request/listaUsuarios.request';
import { Usuarios } from '../../models/usuarios.model';
import { ResponseListaUsuarios } from '../../models/response/listaUsuarios-response';
import { UsuariosService } from '../../service/apis/usuarios-service';

@Component({
  selector: 'app-lista-usuarios-page',
  imports: [],
  templateUrl: './lista-usuarios-page.html',
  styleUrl: './lista-usuarios-page.css'
})
export class ListaUsuariosPage {
  private apiService = inject(UsuariosService);

  req = signal<RequestListaUsuarios>({ option: 1 } as RequestListaUsuarios);
  usuariosData = signal<ResponseListaUsuarios | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  usuariosSeleccionado = signal<Usuarios | null>(null);

  constructor() {
    effect(() => {
      this.loadUsuarios();
    });
  }

  private loadUsuarios() {
    this.loading.set(true);
    this.error.set(null);

    this.apiService.ListarUsuarios(this.req()).subscribe({
      next: (response) => {
        this.usuariosData.set(response);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar los usuarios');
        this.loading.set(false);
        console.error('Error:', err);
      }
    });
  }

  get usuariosResource() {
    return {
      value: () => this.usuariosData(),
      loading: () => this.loading(),
      error: () => this.error()
    };
  }
}
