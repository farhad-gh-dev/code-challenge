import { useEffect } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { useRouter } from "next/router";
import { Direction } from "@mui/material";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const cacheLtr = createCache({
  key: "muiltr",
});

const directionsCache = {
  rtl: cacheRtl,
  ltr: cacheLtr,
};

const languageDirections: { [property: string]: Direction } = {
  fa: "rtl",
  en: "ltr",
};

export const useAppDirection = () => {
  const { locale } = useRouter();
  const appDirection: Direction =
    languageDirections[locale as keyof typeof languageDirections];

  useEffect(() => {
    document.dir = appDirection;
  }, [appDirection]);
  return {
    appDirection,
    appDirectionCache:
      directionsCache[appDirection as keyof typeof directionsCache],
  };
};
