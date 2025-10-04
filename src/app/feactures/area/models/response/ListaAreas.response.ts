import { ResponseGeneral } from "../../../../shared/models/responseGeneral"
import { Areas } from "../areas";

export class ResponseListaAreas extends ResponseGeneral{
  areas: Areas[] = [];
}
