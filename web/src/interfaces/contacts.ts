import { IClientResponse } from "./clients";

interface IContactRequest {
  name: string;
  telephone: string;
  email: string;
  clientId: string;
}

interface IContactUpdate {
  name: string;
  telephone: string;
  email: string;
}

interface IContactResponse {
  id: string;
  name: string;
  telephone: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  client?: IClientResponse;
}

export { type IContactResponse, type IContactRequest, type IContactUpdate };
