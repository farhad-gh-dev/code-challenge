import { Direction, PaletteMode } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { fontFaces } from "./fonts";

const sharedStyles = {
  typography: {
    fontFamily: `iranyekan, Helvetica, Arial, sans-serif`,
    h6: {
      fontSize: "1.0625rem",
    },
    button: {
      fontSize: "12px",
    },
    body1: {
      fontSize: "13.7px",
    },
    a: {
      fontSize: "13.7px",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: fontFaces,
    },
  },
};

const lightPalette = {
  background: {
    default: "#ffffff",
  },
  primary: {
    main: yellow[800],
  },
  secondary: {
    dark: "#ffffff",
    main: "#f4f6f8",
    light: "#f4f6f8",
  },
  text: {
    secondary: "#000000",
  },
};

const darkPalette = {
  background: {
    default: "#161B25",
  },
  primary: {
    main: yellow[800],
  },
  secondary: {
    dark: "#212B35",
    main: "#343d48",
    light: "#343d48",
  },
  text: {
    secondary: "#79838e",
  },
};

export const getThemeStyles = (mode: PaletteMode, appDirection: Direction) => ({
  direction: appDirection,
  palette: {
    mode,
    ...(mode === "light" ? lightPalette : darkPalette),
  },
  ...sharedStyles,
});
