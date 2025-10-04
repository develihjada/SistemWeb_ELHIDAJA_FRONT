import { ResponseGeneral } from "../../../../shared/models/responseGeneral";
import { Proveedores } from "../proveedor";

export class ResponseListaProveedores extends ResponseGeneral{
  proveedores: Proveedores[] = []
}
