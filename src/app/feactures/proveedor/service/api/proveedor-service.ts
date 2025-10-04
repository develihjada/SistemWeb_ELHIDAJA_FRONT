import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ResponseListaProveedores } from '../../models/response/listaProveedores.response';
import { RequestListaProveedores } from '../../models/request/listaProveedores.request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private readonly URL  = environment.api
  private httpCliente = inject(HttpClient)

  public ListarProveedores(req: RequestListaProveedores): Observable<ResponseListaProveedores> {
    return this.httpCliente.post<ResponseListaProveedores>(
      `${this.URL}/proveedores/getall`,req,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
