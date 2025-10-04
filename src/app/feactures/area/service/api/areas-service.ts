import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { RequestListaAreas } from '../../models/request/listaAreas.request';
import { Observable } from 'rxjs';
import { ResponseListaAreas } from '../../models/response/ListaAreas.response';

@Injectable({
  providedIn: 'root'
})
export class AreasService {
  private readonly URL  = environment.api
  private httpCliente = inject(HttpClient)

  public ListarAreas(req: RequestListaAreas): Observable<ResponseListaAreas> {
    return this.httpCliente.post<ResponseListaAreas>(
      `${this.URL}/areas/getall`,req,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
