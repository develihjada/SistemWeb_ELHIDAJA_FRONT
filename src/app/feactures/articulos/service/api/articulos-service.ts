import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { RequestListaArticulos } from '../../models/request/listaArticulos.request';
import { Observable } from 'rxjs';
import { ResponseListaArticulos } from '../../models/response/ListaArticulos.response';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private readonly URL  = environment.api
  private httpCliente = inject(HttpClient)

  public ListarArticulos(req: RequestListaArticulos): Observable<ResponseListaArticulos> {
    return this.httpCliente.post<ResponseListaArticulos>(
      `${this.URL}/productos/getall`,req,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
