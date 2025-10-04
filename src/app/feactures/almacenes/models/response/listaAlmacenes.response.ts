import { ResponseGeneral } from "../../../../shared/models/responseGeneral";
import { Almacenes } from "../almacenes.model";

export class ResponseListaAlmacenes extends ResponseGeneral {
  almacenes: Almacenes[] = [];
}
