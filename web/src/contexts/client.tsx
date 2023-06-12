import { IClientContext } from "@/interfaces/contexts";
import { IClitentProvider } from "../interfaces/providers";
import { createContext, useEffect, useState } from "react";
import api from "@/services/api";
import { toast } from "react-toastify";
import Router from "next/router";

export const ClientContext = createContext({} as IClientContext);

export const ClientProvider = ({ children }: IClitentProvider) => {
  const [clients, setClients] = useState([]);
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    if (typeof window !== undefined) {
      const getToken = localStorage.getItem("Token");
      setToken(getToken);
      if (location.pathname !== "/client/register" && !token) {
        Router.push("/");
      }
      loadClients();
    }
  }, [token]);

  const registerClient = async (data: any) => {
    try {
      await api.post("/clients", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return toast.success("Deu certo!");
    } catch (error: any) {
      return toast.error(error);
    }
  };

  const updateClient = async (data: any, id: string) => {
    try {
      await api.patch(`/clients/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await loadClients();
      return toast.success("Updated!");
    } catch (error: any) {
      return toast.error("Something went wrong!");
    }
  };

  const loadClients = async () => {
    try {
      const clients = await api.get("/clients", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setClients(clients.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteClient = async (id: string) => {
    try {
      api.delete(`/clients/${id}`, {
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
    <ClientContext.Provider
      value={{
        registerClient,
        updateClient,
        loadClients,
        clients,
        setClients,
        token,
        setToken,
        deleteClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
