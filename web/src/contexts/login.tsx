import { ILoginContext } from "@/interfaces/contexts";
import { ILoginProvider } from "@/interfaces/providers";
import api from "@/services/api";
import { createContext } from "react";
import { toast } from "react-toastify";
import Router from "next/router";

export const LoginContext = createContext({} as ILoginContext);

export const LoginProvider = ({ children }: ILoginProvider) => {
  const login = async (data: any) => {
    try {
      const token = (await api.post("/login", data)).data.token;
      localStorage.setItem("Token:", token);
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
