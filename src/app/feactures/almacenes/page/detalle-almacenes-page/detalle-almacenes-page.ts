import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Almacenes } from '../../models/almacenes.model';

@Component({
  selector: 'app-detalle-almacenes-page',
  imports: [],
  templateUrl: './detalle-almacenes-page.html',
  styleUrl: './detalle-almacenes-page.css'
})
export class DetalleAlmacenesPage {
  @Input() almacen: Almacenes | null = null;
  @Output() cerrarModal = new EventEmitter<void>();

  onCerrarModal() {
    this.cerrarModal.emit();
  }
}
