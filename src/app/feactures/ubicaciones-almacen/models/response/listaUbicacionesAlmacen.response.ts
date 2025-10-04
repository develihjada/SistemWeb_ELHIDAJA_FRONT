import { ResponseGeneral } from "../../../../shared/models/responseGeneral";
import { UbicacionesAlmacen } from "../UbicacionesAlmacen";

export class ResponseListaUbicacionesAlmacen  extends ResponseGeneral{
  ubicaciones!: UbicacionesAlmacen[];
}
