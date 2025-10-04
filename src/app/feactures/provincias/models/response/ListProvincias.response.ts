import { ResponseGeneral } from "../../../../shared/models/responseGeneral";
import { Provincias } from "../provincias";

export class ResponseListaProvincias extends ResponseGeneral{
  provincias: Provincias[] = []
}
