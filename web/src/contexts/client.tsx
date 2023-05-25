import { IClientContext } from "@/interfaces/contexts";
import { IClitentProvider } from "../interfaces/providers";
import { createContext } from "react";
import api from "@/services/api";
import { toast } from "react-toastify";

export const ClientContext = createContext({} as IClientContext);

export const ClientProvider = ({ children }: IClitentProvider) => {
  const registerClient = async (data: any) => {
    try {
      await api.post("/clients", data);
      return toast.success("Deu certo!");
    } catch (error: any) {
      return toast.error(error);
    }
  };

  const updateClient = async (data: any, id: string) => {
    try {
      await api.patch(`/clients/${id}`, data);
      return toast.success("Updated!");
    } catch (error: any) {
      return toast.error("Something went wrong!");
    }
  };

  return (
    <ClientContext.Provider value={{ registerClient, updateClient }}>
      {children}
    </ClientContext.Provider>
  );
};
