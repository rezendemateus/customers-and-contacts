import { IClientContext } from "@/interfaces/contexts";
import { IClitentProvider } from "../interfaces/providers";
import { createContext, useState } from "react";
import api from "@/services/api";
import { toast } from "react-toastify";

export const ClientContext = createContext({} as IClientContext);

export const ClientProvider = ({ children }: IClitentProvider) => {
  const [clients, setClients] = useState([]);

  const registerClient = async (data: any) => {
    try {
      await api.post("/clients", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      });
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

  const loadClients = async () => {
    try {
      const clients = await api.get("/clients", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      });
      setClients(clients.data);
    } catch (error) {
      toast.error("Ops. Algo deu errado!");
    }
  };

  return (
    <ClientContext.Provider
      value={{ registerClient, updateClient, loadClients, clients, setClients }}
    >
      {children}
    </ClientContext.Provider>
  );
};
