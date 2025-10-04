import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { RequestListaUbicacionesAlmacen } from '../../models/request/listaUbicacionesAlmacen.request';
import { Observable } from 'rxjs';
import { ResponseListaUbicacionesAlmacen } from '../../models/response/listaUbicacionesAlmacen.response';

@Injectable({
  providedIn: 'root'
})
export class UbicacionesAlmacenesService {
  private readonly URL  = environment.api
  private httpCliente = inject(HttpClient)

  public ListarUbicacionesAlmacen(req: RequestListaUbicacionesAlmacen): Observable<ResponseListaUbicacionesAlmacen> {
    return this.httpCliente.post<ResponseListaUbicacionesAlmacen>(
      `${this.URL}/ubicaciones/getall`,req,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
