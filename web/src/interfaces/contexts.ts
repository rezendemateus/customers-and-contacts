import { IClientRequest } from "./clients";

interface IClientContext {
  registerClient: (data: IClientRequest) => void;
  updateClient: (data: IClientRequest, id: string) => void;
}

export { type IClientContext };
