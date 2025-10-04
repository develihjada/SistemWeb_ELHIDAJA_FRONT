import { RequestAlmacenes } from './../../models/request/listaAlmacenes.request';
import { ResponseListaAlmacenes } from '../../models/response/listaAlmacenes.response';
import { Almacenes } from '../../models/almacenes.model';
import { Component, inject, signal, computed, effect } from '@angular/core';
import { AlmacenesService } from '../../services/apis/almacenes-service';
import { RegistroAlmacenesPage } from '../registro-almacenes-page/registro-almacenes-page';
import { DetalleAlmacenesPage } from '../detalle-almacenes-page/detalle-almacenes-page';
import { Skeleton } from '../../../../shared/components/skeleton/skeleton';
import { Table, AlmacenAction } from "../../components/data/table/table";
import { OptionsViews } from '../../components/filter-views/options-views/options-views';
import { Cards } from '../../components/data/cards/cards';
import { EmptyMessage } from '../../../../shared/components/empty-message/empty-message';

@Component({
  selector: 'app-lista-almacenes-page',
  imports: [RegistroAlmacenesPage, DetalleAlmacenesPage, Skeleton, EmptyMessage, Table, OptionsViews, Cards],
  templateUrl: './lista-almacenes-page.html',
  styleUrl: './lista-almacenes-page.css'
})
export class ListaAlmacenesPage {
  private apiService = inject(AlmacenesService);

  req = signal<RequestAlmacenes>({ option: 1 } as RequestAlmacenes);
  almacenesData = signal<ResponseListaAlmacenes | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  almacenSeleccionado = signal<Almacenes | null>(null);

  constructor() {
    effect(() => {
      this.loadAlmacenes();
    });
  }

  private loadAlmacenes() {
    this.loading.set(true);
    this.error.set(null);

    this.apiService.ListarAlmacenes(this.req()).subscribe({
      next: (response) => {
        this.almacenesData.set(response);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar los almacenes');
        this.loading.set(false);
        console.error('Error:', err);
      }
    });
  }

  get almacenesResource() {
    return {
      value: () => this.almacenesData(),
      loading: () => this.loading(),
      error: () => this.error()
    };
  }

  filtrarPorEstado(option: number) {
    this.req.set({ ...this.req(), option });
  }

  onAlmacenGuardado(nuevoAlmacen: Almacenes) {
    console.log('Nuevo almacén guardado:', nuevoAlmacen);
    this.loadAlmacenes();
  }

  onModalCerrado() {
    console.log('Modal cerrado');
  }

  // Método público para recargar datos
  recargarDatos() {
    this.loadAlmacenes();
  }

  // Método para manejar las acciones de la tabla
  onAccionTabla(action: AlmacenAction) {
    switch (action.type) {
      case 'ver':
        this.verDetalleAlmacen(action.almacen);
        break;
      case 'editar':
        this.editarAlmacen(action.almacen);
        break;
      case 'eliminar':
        this.eliminarAlmacen(action.almacen);
        break;
    }
  }

  // Método para manejar los tipos de vista
  dataView: 'card' | 'tabla' = 'tabla';

  onTipoVista(action: { type: 'tabla' | 'card' }) {
    console.log('Tipo de vista seleccionado:', action.type);
    this.dataView = action.type;
  }


  // Método para buscar almacenes
  onBuscarAlmacenes(termino: string) {
    console.log('Buscar:', termino);
    // Aquí implementarías la lógica de búsqueda
  }

  // Método para editar almacén (placeholder)
  private editarAlmacen(almacen: Almacenes) {
    console.log('Editar almacén:', almacen);
    // Aquí implementarías la lógica para abrir modal de edición
  }

  // Método para eliminar almacén (placeholder)
  private eliminarAlmacen(almacen: Almacenes) {
    console.log('Eliminar almacén:', almacen);
    // Aquí implementarías la lógica de confirmación y eliminación
  }

  // Método para cerrar el modal de detalle
  cerrarModalDetalle() {
    requestAnimationFrame(() => {
      const modalElement = document.getElementById('hs-ai-invoice-modal');
      if (modalElement) {
        // Remover clases para ocultar el modal
        modalElement.classList.add('hidden');
        modalElement.classList.remove('hs-overlay-open');
        modalElement.setAttribute('aria-hidden', 'true');
        modalElement.style.pointerEvents = 'none';

        // Restaurar scroll del body
        document.body.classList.remove('overflow-hidden');

        // Remover backdrop con animación
        const backdrop = document.querySelector('.hs-overlay-backdrop') as HTMLElement;
        if (backdrop) {
          backdrop.style.opacity = '0';
          setTimeout(() => {
            backdrop.remove();
          }, 200);
        }

        // Animar la salida del modal
        const modalDialog = modalElement.querySelector('.hs-overlay-open\\:mt-7, .hs-overlay-open\\:opacity-100, .hs-overlay-open\\:duration-500') as HTMLElement;
        if (modalDialog) {
          modalDialog.style.marginTop = '0';
          modalDialog.style.opacity = '0';
        }

        // Usar la API de Preline si está disponible
        if ((window as any).HSOverlay) {
          try {
            (window as any).HSOverlay.close(modalElement);
          } catch (e) {
            console.log('Preline API not available, using manual approach');
          }
        }

        // Limpiar la selección después de un delay
        setTimeout(() => {
          this.almacenSeleccionado.set(null);
        }, 300);
      }
    });
  }

  // Método para seleccionar un almacén y mostrar su detalle
  verDetalleAlmacen(almacen: Almacenes) {
    this.almacenSeleccionado.set(almacen);
    console.log('Almacén seleccionado:', almacen);

    // Abrir el modal programáticamente con un enfoque más robusto
    requestAnimationFrame(() => {
      const modalElement = document.getElementById('hs-ai-invoice-modal');
      if (modalElement) {
        // Remover la clase hidden y agregar clases de apertura
        modalElement.classList.remove('hidden');
        modalElement.classList.add('hs-overlay-open');
        modalElement.setAttribute('aria-hidden', 'false');
        modalElement.style.pointerEvents = 'auto';

        // Añadir clase al body para prevenir scroll
        document.body.classList.add('overflow-hidden');

        // Crear y mostrar backdrop con opacidad más suave
        let backdrop = document.querySelector('.hs-overlay-backdrop') as HTMLElement;
        if (!backdrop) {
          backdrop = document.createElement('div') as HTMLElement;
          backdrop.className = 'hs-overlay-backdrop transition duration-200 fixed inset-0 bg-gray-900/10 bg-opacity-20';
          backdrop.style.zIndex = '79';
          document.body.appendChild(backdrop);
        }

        // Animar la entrada del modal
        const modalDialog = modalElement.querySelector('.hs-overlay-open\\:mt-7, .hs-overlay-open\\:opacity-100, .hs-overlay-open\\:duration-500');
        if (modalDialog) {
          (modalDialog as HTMLElement).style.marginTop = '1.75rem';
          (modalDialog as HTMLElement).style.opacity = '1';
        }

        // Usar la API de Preline si está disponible
        if ((window as any).HSOverlay) {
          try {
            (window as any).HSOverlay.open(modalElement);
          } catch (e) {
            console.log('Preline API not available, using manual approach');
          }
        }
      }
    });
  }
}
