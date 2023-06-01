import { ILoginContext } from "@/interfaces/contexts";
import { ILoginProvider } from "@/interfaces/providers";
import api from "@/services/api";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import Router from "next/router";

export const LoginContext = createContext({} as ILoginContext);

export const LoginProvider = ({ children }: ILoginProvider) => {
  const login = async (data: any) => {
    try {
      const getToken = await api.post("/login", data);
      localStorage.setItem("Token", getToken.data.token);

      Router.push("/client");
      return toast.success("Logged!");
    } catch (error) {
      return toast.error("Check your information!");
    }
  };

  return (
    <LoginContext.Provider value={{ login }}>{children}</LoginContext.Provider>
  );
};
