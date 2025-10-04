import { RequestRegistrarDepartamentos } from "./RegistrarDepartamentos.request";

export class RequestRegistrarDepartamentoBuilder {
  private request: RequestRegistrarDepartamentos;

  constructor() {
    this.request = new RequestRegistrarDepartamentos();
  }

  setNombre(nombre: string): RequestRegistrarDepartamentoBuilder {
    this.request.nombre = nombre;
    return this;
  }

  build(): RequestRegistrarDepartamentos {
    return this.request;
  }
}
