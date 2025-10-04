import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { RequestListaUsuarios } from '../../models/request/listaUsuarios.request';
import { Observable } from 'rxjs';
import { ResponseListaUsuarios } from '../../models/response/listaUsuarios-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private readonly URL  = environment.api
  private httpCliente = inject(HttpClient)

  public ListarUsuarios(req: RequestListaUsuarios): Observable<ResponseListaUsuarios> {
    return this.httpCliente.post<ResponseListaUsuarios>(
      `${this.URL}/usuarios/getall`,req,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

}
