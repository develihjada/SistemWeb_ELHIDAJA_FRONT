import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface TiposVista {
  type: 'tabla' | 'card';
}


@Component({
  selector: 'app-options-views',
  imports: [],
  templateUrl: './options-views.html',
  styleUrl: './options-views.css'
})
export class OptionsViews {
@Input() vistaActiva: 'tabla' | 'card' = 'tabla';
  @Output() accionClick = new EventEmitter<TiposVista>();

  onActionClick(type: 'tabla' | 'card') {
    this.accionClick.emit({ type });
  }

  isActive(type: 'tabla' | 'card'): boolean {
    return this.vistaActiva === type;
  }
}
