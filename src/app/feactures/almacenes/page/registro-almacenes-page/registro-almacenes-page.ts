import { Component, inject, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AlmacenesService } from '../../services/apis/almacenes-service';
import { Almacenes } from '../../models/almacenes.model';
import { ResponseListaAlmacenes } from '../../models/response/listaAlmacenes.response';
import { RequestRegistrarAlmacenesBuilder } from '../../models/request/registrarAlmacenes.builder';
import { ResponseRegistroAlmacenes } from '../../models/response/registroAlmacenes.response';

@Component({
  selector: 'app-registro-almacenes-page',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registro-almacenes-page.html',
  styleUrl: './registro-almacenes-page.css'
})
export class RegistroAlmacenesPage {

  @Output() almacenGuardado = new EventEmitter<Almacenes>();
  @Output() modalCerrado = new EventEmitter<void>();

  isLoading = false;

  private api = inject(AlmacenesService);
  private router = inject(Router);
  private sub = new Subscription();

  // ========================================================
  // SELECTS
  // ========================================================
  empleadoSeleccionado: number = 0;
  distritoSeleccionado: string = '';

  formularioRegistro: FormGroup = new FormGroup({});
  sucursalModel: Almacenes = new Almacenes();

  ngOnInit(): void {
    this.ValidacionFormulario();
    this.setupModalEventListeners();
  }

  private setupModalEventListeners() {
    // Escuchar cuando el modal se abra para prepararlo
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target && target.getAttribute('data-hs-overlay') === '#hs-ai-registro-modal') {
        this.prepararModal();
      }
    });
  }

  private prepararModal() {
    // Asegurar que el modal esté en estado limpio antes de abrirse
    const modal = document.getElementById('hs-ai-registro-modal');
    if (modal) {
      // Limpiar cualquier estado residual
      this.limpiarElementosModal();

      // Asegurar que el formulario esté limpio
      if (this.formularioRegistro.pristine === false) {
        this.limpiarFormulario();
      }
    }
  }

  ValidacionFormulario() {
    this.formularioRegistro = new FormGroup({
      descripcion: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ]),
      codigo: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ])
    });
  }


  async guardarRegistro() {
    // Marcar todos los campos como touched para mostrar errores
    Object.keys(this.formularioRegistro.controls).forEach(key => {
      this.formularioRegistro.get(key)?.markAsTouched();
    });

    if (this.formularioRegistro.invalid) {
      console.log('Formulario inválido:', this.formularioRegistro.errors);
      return;
    }

    this.isLoading = true;

    try {
      const formValues = this.formularioRegistro.value;
      const formvalue = new RequestRegistrarAlmacenesBuilder()
        .setDescripcion(formValues.descripcion)
        .setCodigo(formValues.codigo)
        .build();

      const response: ResponseRegistroAlmacenes = await lastValueFrom(
        this.api.RegistroAlmacenes(formvalue)
      );

      if (response.exito) {
        // Limpiar formulario inmediatamente
        this.limpiarFormulario();

        // Crear el objeto almacén guardado
        const nuevoAlmacen: Almacenes = {
          id_almacen: 0, // Se actualizará cuando se recargue la lista
          codigo: formValues.codigo,
          descripcion: formValues.descripcion,
          status: true
        };

        // Cerrar modal inmediatamente
        this.cerrarModal();

        // Emitir evento después de cerrar (para evitar conflictos)
        setTimeout(() => {
          this.almacenGuardado.emit(nuevoAlmacen);
        }, 50);

        console.log('Almacén guardado exitosamente');
      } else {
        console.error('Error al guardar:', response.mensaje);
      }
    } catch (err) {
      console.error('Error en el registro:', err);
    } finally {
      this.isLoading = false;
    }
  }

  cerrarModal() {
    const modal = document.getElementById('hs-ai-registro-modal');
    if (modal) {
      // Ocultar el modal inmediatamente
      modal.classList.remove('hs-overlay-open');
      modal.classList.add('hidden');

      // Limpiar todo inmediatamente para evitar delays
      this.limpiarElementosModal();
    }
    this.modalCerrado.emit();
  }

  private limpiarElementosModal() {
    // Limpiar estilos del body inmediatamente
    document.body.classList.remove('overflow-hidden', 'hs-overlay-open');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';

    // Remover backdrops inmediatamente
    const overlays = document.querySelectorAll('.hs-overlay-backdrop, [data-hs-overlay-backdrop]');
    overlays.forEach(overlay => overlay.remove());

    // Usar requestAnimationFrame para limpiar cualquier residuo después del siguiente frame
    requestAnimationFrame(() => {
      // Limpiar cualquier elemento residual que pueda haberse creado
      const residualOverlays = document.querySelectorAll('.hs-overlay-backdrop, [data-hs-overlay-backdrop]');
      residualOverlays.forEach(overlay => overlay.remove());

      // Asegurar que el body esté completamente limpio
      document.body.style.removeProperty('overflow');
      document.documentElement.style.removeProperty('overflow');
    });
  }

  limpiarFormulario() {
    // Reset rápido del formulario
    this.formularioRegistro.reset('', { emitEvent: false });

    // Limpiar estados de validación de manera más eficiente
    Object.values(this.formularioRegistro.controls).forEach(control => {
      control.setErrors(null);
      control.markAsUntouched();
      control.markAsPristine();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
