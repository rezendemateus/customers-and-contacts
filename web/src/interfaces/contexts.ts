import { IClientRequest } from "./clients";
import { ILoginRequest } from "./login";

interface IClientContext {
  registerClient: (data: IClientRequest) => void;
  updateClient: (data: IClientRequest, id: string) => void;
}

interface ILoginContext {
  login: (data: ILoginRequest) => void;
}

export { type IClientContext, type ILoginContext };
