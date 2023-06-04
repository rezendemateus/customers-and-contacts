import { ClientProvider } from "@/contexts/client";
import { ContactProvider } from "@/contexts/contacts";
import { LoginProvider } from "@/contexts/login";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoginProvider>
        <ClientProvider>
          <ContactProvider>
            <Component {...pageProps} />
          </ContactProvider>
        </ClientProvider>
      </LoginProvider>
      <ToastContainer />
    </>
  );
}
