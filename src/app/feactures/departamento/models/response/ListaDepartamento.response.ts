import { ResponseGeneral } from "../../../../shared/models/responseGeneral";
import { Departamento } from "../departamento";

export class ResponseListaDepartamentos extends ResponseGeneral {
  departamentos: Departamento[] = []
}
