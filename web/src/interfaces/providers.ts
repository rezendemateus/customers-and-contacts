import { ReactNode } from "react";

interface IClitentProvider {
  children: ReactNode;
}

interface ILoginProvider {
  children: ReactNode;
}

interface IContactProvider {
  children: ReactNode;
}

export { type IClitentProvider, type ILoginProvider, type IContactProvider };
