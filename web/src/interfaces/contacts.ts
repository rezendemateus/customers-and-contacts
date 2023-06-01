import { Dispatch, SetStateAction } from "react";
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

interface IEditClientModal {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  dataModal: IClientResponse;
  id: string;
}

export {
  type IContactResponse,
  type IContactRequest,
  type IContactUpdate,
  type IEditClientModal,
};
