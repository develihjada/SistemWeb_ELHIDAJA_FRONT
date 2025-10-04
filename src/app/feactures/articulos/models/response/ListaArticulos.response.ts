import { ResponseGeneral } from "../../../../shared/models/responseGeneral";
import { Articulos } from "../Articulos";

export class ResponseListaArticulos extends ResponseGeneral {
  productos: Articulos[] = [];
}
