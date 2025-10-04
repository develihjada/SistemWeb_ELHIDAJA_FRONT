import { Component, effect, inject, signal } from '@angular/core';
import { DepartamentoService } from '../../service/api/departamento-service';
import { RequestListaDepartamento } from '../../models/request/ListaDepartamento.request';
import { ResponseListaDepartamentos } from '../../models/response/ListaDepartamento.response';
import { Departamento } from '../../models/departamento';
import { OptionsViews } from '../../components/filter-views/options-views/options-views';
import { Table, DepartamentoAction } from '../../components/data/table/table';
import { EmptyMessage } from "../../../../shared/components/empty-message/empty-message";
import { Skeleton } from "../../../../shared/components/skeleton/skeleton";
import { RegistroDepartamentoPage } from '../registro-departamento-page/registro-departamento-page';
import { Cards } from "../../components/data/cards/cards";

@Component({
  selector: 'app-lista-departamento-page',
  imports: [OptionsViews, Table, EmptyMessage, Skeleton, RegistroDepartamentoPage, Cards],
  templateUrl: './lista-departamento-page.html',
  styleUrl: './lista-departamento-page.css',
})
export class ListaDepartamentoPage {
  private apiService = inject(DepartamentoService);

  req = signal<RequestListaDepartamento>({ option: 1 } as RequestListaDepartamento);
  proveedoresData = signal<ResponseListaDepartamentos | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  proveedorSeleccionado = signal<Departamento | null>(null);

  constructor() {
    effect(() => {
      this.loadDepartamentos();
    });
  }

  private loadDepartamentos() {
    this.loading.set(true);
    this.error.set(null);

    this.apiService.ListarDepartamento(this.req()).subscribe({
      next: response => {
        this.proveedoresData.set(response);
        this.loading.set(false);
      },
      error: err => {
        this.error.set('Error al cargar los departamentos');
        this.loading.set(false);
        console.error('Error:', err);
      },
    });
  }

  get departamentosResource() {
    return {
      value: () => this.proveedoresData(),
      loading: () => this.loading(),
      error: () => this.error(),
    };
  }

  // Método para manejar los tipos de vista
  dataView: 'card' | 'tabla' = 'tabla';

  onTipoVista(action: { type: 'tabla' | 'card' }) {
    console.log('Tipo de vista seleccionado:', action.type);
    this.dataView = action.type;
  }

  // Método para manejar las acciones de la tabla
  onAccionTabla(action: DepartamentoAction) {
    switch (
      action.type
      // case 'ver':
      //   this.verDetalleDepartamento(action.departamento);
      //   break;
      // case 'editar':
      //   this.editarDepartamento(action.departamento);
      //   break;
      // case 'eliminar':
      //   this.eliminarDepartamento(action.departamento);
      //   break;
    ) {
    }
  }

   // Método para buscar almacenes
  onBuscarDepartamentos(termino: string) {
    console.log('Buscar:', termino);
    // Aquí implementarías la lógica de búsqueda
  }

   onDepartamentoGuardado(nuevoDepartamento: Departamento) {
      console.log('Nuevo departamento guardado:', nuevoDepartamento);
      this.loadDepartamentos();
    }

    onModalCerrado() {
    console.log('Modal cerrado');
  }
}
