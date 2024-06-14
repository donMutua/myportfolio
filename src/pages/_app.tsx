import React, { useEffect, ComponentType } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

import * as gtag from "../utils/gtag";
import { PortfolioProvider } from "../store/PortfolioContext";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url); // Call the gtag utility function to track the pageview
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const PageComponent = Component as ComponentType<any>;
  return (
    <PortfolioProvider>
      <PageComponent {...pageProps} />
    </PortfolioProvider>
  );
}

export default MyApp;
