import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { RequestListaCategoria } from '../../models/request/listaCategoria.request';
import { Observable } from 'rxjs';
import { ResponseListaCategoria } from '../../models/response/ListaCategorias.response';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private readonly URL  = environment.api
  private httpCliente = inject(HttpClient)

  public ListarCategoria(req: RequestListaCategoria): Observable<ResponseListaCategoria> {
    return this.httpCliente.post<ResponseListaCategoria>(
      `${this.URL}/categorias/getall`,req,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
