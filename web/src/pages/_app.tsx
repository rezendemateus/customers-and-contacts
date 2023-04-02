import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CustomerListProvider } from "@/contexts/CustomerListContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomerListProvider>
      <Component {...pageProps} />;
    </CustomerListProvider>
  );
}
