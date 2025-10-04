import { ResponseGeneral } from "../../../../shared/models/responseGeneral";
import { Puesto } from "../puesto";

export class ResponseListaPuesto extends ResponseGeneral {
  puestos: Puesto[] = [];
}
