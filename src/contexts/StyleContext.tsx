import React, { useState, useMemo, createContext } from "react";
import { PaletteMode, createTheme, CssBaseline } from "@mui/material";
import { getThemeStyles } from "styles/themes";
import { ThemeProvider } from "@mui/material";
import { useAppDirection } from "hooks/useAppDirection";

export const AppThemeContext = createContext({});

interface Props {
  children?: React.ReactNode;
}

const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const { appDirection } = useAppDirection();
  const [mode, setMode] = useState<PaletteMode>("dark");

  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = useMemo(
    () => createTheme(getThemeStyles(mode, appDirection)),
    [mode, appDirection]
  );

  return (
    <AppThemeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export default AppThemeProvider;
