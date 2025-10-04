import { ResponseGeneral } from "../../../../shared/models/responseGeneral"
import { UnidadMedida } from "../unidad-medida";

export class ResponseListaUnidadMedida extends ResponseGeneral{
  unidadMedidas: UnidadMedida[] = [];
}
