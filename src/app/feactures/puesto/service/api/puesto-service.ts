import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { RequestListaPuestos } from '../../models/request/listaPuesto.request';
import { Observable } from 'rxjs';
import { ResponseListaPuesto } from '../../models/response/listaPuesto.response';

@Injectable({
  providedIn: 'root'
})
export class PuestoService {
  private readonly URL  = environment.api
  private httpCliente = inject(HttpClient)

  public ListarPuesto(req: RequestListaPuestos): Observable<ResponseListaPuesto> {
    return this.httpCliente.post<ResponseListaPuesto>(
      `${this.URL}/puestos/getall`,req,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
