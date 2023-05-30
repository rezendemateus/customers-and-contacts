import { Dispatch, SetStateAction } from "react";
import { IClientRequest, IClientResponse } from "./clients";
import { ILoginRequest } from "./login";

interface IClientContext {
  registerClient: (data: IClientRequest) => void;
  updateClient: (data: IClientRequest, id: string) => void;
  loadClients: () => void;
  clients: never[];
  setClients: Dispatch<SetStateAction<never[]>>;
}

interface ILoginContext {
  login: (data: ILoginRequest) => void;
}

export { type IClientContext, type ILoginContext };
