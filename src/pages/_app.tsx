import React, { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

import * as gtag from "../utils/gtag";
import { PortfolioProvider } from "@/store/PortfolioContext";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const NextComponent = Component as NextPage;

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url); // Call the gtag utility function to track the pageview
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <PortfolioProvider>
      <NextComponent {...pageProps} />
    </PortfolioProvider>
  );
}

export default MyApp;
