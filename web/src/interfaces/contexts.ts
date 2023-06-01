import { Dispatch, SetStateAction } from "react";
import { IClientRequest } from "./clients";
import { ILoginRequest } from "./login";
import { IContactRequest } from "./contacts";

interface IClientContext {
  registerClient: (data: IClientRequest) => void;
  updateClient: (data: IClientRequest, id: string) => void;
  deleteClient: (id: string) => void;
  loadClients: () => void;
  clients: never[];
  setClients: Dispatch<SetStateAction<never[]>>;
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
}

interface ILoginContext {
  login: (data: ILoginRequest) => void;
}

interface IContactModal {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}
interface IContactContext {
  createContact: (data: IContactRequest) => void;
  updateContact: (data: IContactRequest) => void;
  deleteContact: (id: string) => void;
}

export {
  type IClientContext,
  type ILoginContext,
  type IContactModal,
  type IContactContext,
};
