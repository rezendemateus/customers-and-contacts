import { IContactRequest } from "@/interfaces/contacts";
import api from "@/services/api";
import { toast } from "react-toastify";
import { createContext, useContext } from "react";
import { IContactContext } from "@/interfaces/contexts";
import { IContactProvider } from "@/interfaces/providers";
import { ClientContext } from "./client";

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IContactProvider) => {
  const { token } = useContext(ClientContext);
  const createContact = async (data: IContactRequest) => {
    try {
      await api.post("/contacts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return toast.success("Created!");
    } catch (error) {
      return toast.error("Error!");
    }
  };

  const updateContact = async (data: IContactRequest) => {
    try {
      await api.patch("/contacts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return toast.success("Created!");
    } catch (error) {
      return toast.error("Error!");
    }
  };

  const deleteContact = async (id: string) => {
    try {
      api.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Deleted!");
    } catch {
      toast.error("Error!");
    }
  };

  return (
    <ContactContext.Provider
      value={{ createContact, updateContact, deleteContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};
