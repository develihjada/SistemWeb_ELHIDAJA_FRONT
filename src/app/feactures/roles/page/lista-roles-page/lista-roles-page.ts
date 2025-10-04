import { Component, effect, inject, signal } from '@angular/core';
import { RequestListaRoles } from '../../models/request/listaRoles.request';
import { ResponseListaRoles } from '../../models/response/listaRoles.response';
import { Roles } from '../../models/roles';
import { RolesService } from '../../service/api/roles-service';

@Component({
  selector: 'app-lista-roles-page',
  imports: [],
  templateUrl: './lista-roles-page.html',
  styleUrl: './lista-roles-page.css'
})
export class ListaRolesPage {
  private apiService = inject(RolesService);

  req = signal<RequestListaRoles>({ option: 1 } as RequestListaRoles);
  rolesData = signal<ResponseListaRoles | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  rolSeleccionado = signal<Roles | null>(null);

  constructor() {
    effect(() => {
      this.loadRoles();
    });
  }

  private loadRoles() {
    this.loading.set(true);
    this.error.set(null);

    this.apiService.ListaRoles(this.req()).subscribe({
      next: (response) => {
        this.rolesData.set(response);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar las unidades');
        this.loading.set(false);
        console.error('Error:', err);
      }
    });
  }

  get rolesResource() {
    return {
      value: () => this.rolesData(),
      loading: () => this.loading(),
      error: () => this.error()
    };
  }
}
