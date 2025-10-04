import { RequestListadoSubCategoria } from './../../models/request/listadoSubCategoria.request';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ResponseListaSubCategoria } from '../../models/response/listadoSubCategoria.response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {
  private readonly URL  = environment.api
  private httpCliente = inject(HttpClient)

  public ListarSubCategoria(req: RequestListadoSubCategoria): Observable<ResponseListaSubCategoria> {
    return this.httpCliente.post<ResponseListaSubCategoria>(
      `${this.URL}/subcategorias/getall`,req,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
