import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { RequestListaRoles } from '../../models/request/listaRoles.request';
import { Observable } from 'rxjs';
import { ResponseListaRoles } from '../../models/response/listaRoles.response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private readonly URL  = environment.api
  private httpCliente = inject(HttpClient)

  public ListaRoles(req: RequestListaRoles): Observable<ResponseListaRoles> {
    return this.httpCliente.post<ResponseListaRoles>(
      `${this.URL}/roles/getall`,req,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
