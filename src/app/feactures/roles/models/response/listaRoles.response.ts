import { ResponseGeneral } from "../../../../shared/models/responseGeneral";
import { Roles } from "../roles";

export class ResponseListaRoles extends ResponseGeneral {
  roles: Roles[] = [];
}
