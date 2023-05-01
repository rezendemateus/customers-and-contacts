import { IClientRequest } from "./clients";

interface IClientContext {
  registerUser: (data: IClientRequest) => void;
}

export { type IClientContext };
