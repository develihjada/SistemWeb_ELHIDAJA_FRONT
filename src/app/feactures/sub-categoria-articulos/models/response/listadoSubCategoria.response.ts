import { ResponseGeneral } from "../../../../shared/models/responseGeneral";
import { SubCategoria } from "../subcategoria";

export class ResponseListaSubCategoria extends ResponseGeneral {
  subCategorias!: SubCategoria[];
}
