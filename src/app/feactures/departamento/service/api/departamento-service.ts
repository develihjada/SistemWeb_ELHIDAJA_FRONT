import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { RequestListaDepartamento } from '../../models/request/ListaDepartamento.request';
import { Observable } from 'rxjs';
import { ResponseListaDepartamentos } from '../../models/response/ListaDepartamento.response';
import { RequestRegistrarDepartamentos } from '../../models/request/RegistrarDepartamentos.request';
import { ResponseRegistroDepartamento } from '../../models/response/registroDepartamento.response';


@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private readonly URL  = environment.api
  private httpCliente = inject(HttpClient)

  public ListarDepartamento(req: RequestListaDepartamento): Observable<ResponseListaDepartamentos> {
    return this.httpCliente.post<ResponseListaDepartamentos>(
      `${this.URL}/departamentos/getall`,req,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  public RegistroDepartamentos(req: RequestRegistrarDepartamentos): Observable<ResponseRegistroDepartamento> {
      return this.httpCliente.post<ResponseRegistroDepartamento>(
        `${this.URL}/departamentos/create`,req,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
}
