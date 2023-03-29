import { IClientResponse } from "../clients";

interface IContact {}

interface IContactResponse {
  id: string;
  name: string;
  telephone: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  client?: IClientResponse;
}

export { IContactResponse };
