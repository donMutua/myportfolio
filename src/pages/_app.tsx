import React, { useEffect, ComponentType } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

import * as gtag from "../utils/gtag";
import { PortfolioProvider } from "../store/PortfolioContext";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const PageComponent = Component as NextPage;

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
      <PageComponent {...pageProps} />
    </PortfolioProvider>
  );
};

export default MyApp;
