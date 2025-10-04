import { ResponseGeneral } from "../../../../shared/models/responseGeneral";
import { Distrito } from "../distrito";

export class ResponseListaDistrito extends ResponseGeneral {
  distritos: Distrito[] = []
}
