import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseListaAlmacenes } from '../../models/response/listaAlmacenes.response';
import { RequestAlmacenes } from '../../models/request/listaAlmacenes.request';
import { ReqRegistrarEstadoAlmacen } from '../../models/request/registrartAlmacenes.request';
import { ResponseRegistroAlmacenes } from '../../models/response/registroAlmacenes.response';

@Injectable({
  providedIn: 'root'
})
export class AlmacenesService {
  private readonly URL  = environment.api
  private httpCliente = inject(HttpClient)

  public ListarAlmacenes(req: RequestAlmacenes): Observable<ResponseListaAlmacenes> {
    return this.httpCliente.post<ResponseListaAlmacenes>(
      `${this.URL}/almacenes/getall`,req,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  public RegistroAlmacenes(req: ReqRegistrarEstadoAlmacen): Observable<ResponseRegistroAlmacenes> {
    return this.httpCliente.post<ResponseRegistroAlmacenes>(
      `${this.URL}/almacenes/create`,req,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

}
