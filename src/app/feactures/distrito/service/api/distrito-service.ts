import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { RequestListaDistrito } from '../../models/request/listaDistrito.request';
import { Observable } from 'rxjs';
import { ResponseListaDistrito } from '../../models/response/ListaDistrito.response';

@Injectable({
  providedIn: 'root'
})
export class DistritoService {
  private readonly URL  = environment.api
  private httpCliente = inject(HttpClient)

  public ListarDistritos(req: RequestListaDistrito): Observable<ResponseListaDistrito> {
    return this.httpCliente.post<ResponseListaDistrito>(
      `${this.URL}/distritos/getall`,req,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
