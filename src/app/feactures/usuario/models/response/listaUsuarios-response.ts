import { ResponseGeneral } from "../../../../shared/models/responseGeneral";
import { Usuarios } from "../usuarios.model";

export class ResponseListaUsuarios extends ResponseGeneral {
  usuarios!: Usuarios[]
}
