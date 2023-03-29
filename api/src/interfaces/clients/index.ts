import { UUID } from "crypto";
import { IContactResponse } from "../contacts";

interface IClientRequest {
  name: string;
  cpf: string;
  email: string;
  telephone: string;
  password: string;
}

interface IClientResponse {
  id: string;
  name: string;
  cpf: string;
  email: string;
  telephone: string;
  createdAt: Date;
  updatedAt: Date;
  contacts: IContactResponse[];
}

interface IClientUpdate {
  name?: string;
  cpf?: string;
  password?: string;
  telephone?: string;
  email?: string;
}

export { IClientRequest, IClientResponse, IClientUpdate };
