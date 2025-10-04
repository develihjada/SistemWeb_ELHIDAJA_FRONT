import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-message',
  imports: [],
  templateUrl: './empty-message.html',
  styleUrl: './empty-message.css'
})
export class EmptyMessage {
  @Input() Title: string = ""

  mensajeVacio: string = `Regisra tus primeros datos para empezar a gestionar la información.`
}
