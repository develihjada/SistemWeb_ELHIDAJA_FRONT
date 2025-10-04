import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { RequestListaProvincias } from '../../models/request/ListaProvincias.request';
import { Observable } from 'rxjs';
import { ResponseListaProvincias } from '../../models/response/ListProvincias.response';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {
  private readonly URL  = environment.api
  private httpCliente = inject(HttpClient)

  public ListarProvincias(req: RequestListaProvincias): Observable<ResponseListaProvincias> {
    return this.httpCliente.post<ResponseListaProvincias>(
      `${this.URL}/provincias/getall`,req,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
