import { ReqRegistrarEstadoAlmacen } from './registrartAlmacenes.request';
export class RequestRegistrarAlmacenesBuilder {
  private request: ReqRegistrarEstadoAlmacen;

  constructor() {
    this.request = new ReqRegistrarEstadoAlmacen();
  }

  setDescripcion(descripcion: string): this {
    this.request.descripcion = descripcion;
    return this;
  }

  setCodigo(codigo: string): this {
    this.request.codigo = codigo;
    return this;
  }

  build(): ReqRegistrarEstadoAlmacen {
    return this.request;
  }
}
