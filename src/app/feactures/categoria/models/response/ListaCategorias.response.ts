import { ResponseGeneral } from "../../../../shared/models/responseGeneral";
import { Categoria } from "../categoria";

export class ResponseListaCategoria extends ResponseGeneral{
  categorias: Categoria[] = []
}
