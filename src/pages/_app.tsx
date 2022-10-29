import React from "react";
import type { AppProps } from "next/app";
import { useAppDirection } from "hooks/useAppDirection";
import { CacheProvider } from "@emotion/react";
import AppThemeProvider from "contexts/StyleContext";
import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }: AppProps) => {
  const { appDirectionCache } = useAppDirection();

  return (
    <CacheProvider value={appDirectionCache}>
      <AppThemeProvider>
        <Component {...pageProps} />
      </AppThemeProvider>
    </CacheProvider>
  );
};

export default appWithTranslation(App);
