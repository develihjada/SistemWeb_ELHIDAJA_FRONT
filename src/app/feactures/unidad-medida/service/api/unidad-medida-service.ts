import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { RequestListaUnidadMedida } from '../../models/request/listaUnidadMedida.request';
import { Observable } from 'rxjs';
import { ResponseListaUnidadMedida } from '../../models/response/listaUnidadMedida.response';

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService {
  private readonly URL  = environment.api
  private httpCliente = inject(HttpClient)

  public ListarUnidadMedida(req: RequestListaUnidadMedida): Observable<ResponseListaUnidadMedida> {
    return this.httpCliente.post<ResponseListaUnidadMedida>(
      `${this.URL}/unidades-medida/getall`,req,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
