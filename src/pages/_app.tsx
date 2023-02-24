import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PortfolioProvider } from "@/store/PortfolioContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PortfolioProvider>
      <Component {...pageProps} />
    </PortfolioProvider>
  );
}

export default MyApp;
