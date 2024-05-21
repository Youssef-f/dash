import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { light } from "@mui/material/styles/createPalette";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
          100: "#d3cddc",
          200: "#a79cb9",
          300: "#7c6a96",
          400: "#503973",
          500: "#240750",
          600: "#1d0640",
          700: "#160430",
          800: "#0e0320",
          900: "#070110",
        },
        grey: {
          100: "#d6dbe0",
          200: "#aeb7c1",
          300: "#8594a2",
          400: "#5d7083",
          500: "#344c64",
          600: "#2a3d50",
          700: "#1f2e3c",
          800: "#151e28",
          900: "#0a0f14",
        },
        greenAccent: {
          100: "#ddedec",
          200: "#bcdbd9",
          300: "#9acac7",
          400: "#79b8b4",
          500: "#57a6a1",
          600: "#468581",
          700: "#346461",
          800: "#234240",
          900: "#112120",
        },
        redAccent: {
          100: "#f4d7de",
          200: "#e9afbd",
          300: "#dd869b",
          400: "#d25e7a",
          500: "#c73659",
          600: "#9f2b47",
          700: "#772035",
          800: "#501624",
          900: "#280b12",
        },
        blueAccent: {
          100: "#ccd6e7",
          200: "#99adce",
          300: "#6684b6",
          400: "#335b9d",
          500: "#003285",
          600: "#00286a",
          700: "#001e50",
          800: "#001435",
          900: "#000a1b",
        },
      }
    : {
        primary: {
          100: "#070110",
          200: "#0e0320",
          300: "#160430",
          400: "#1d0640",
          500: "#240750",
          600: "#503973",
          700: "#7c6a96",
          800: "#a79cb9",
          900: "#d3cddc",
        },
        grey: {
          100: "#0a0f14",
          200: "#151e28",
          300: "#1f2e3c",
          400: "#2a3d50",
          500: "#344c64",
          600: "#5d7083",
          700: "#8594a2",
          800: "#aeb7c1",
          900: "#d6dbe0",
        },
        greenAccent: {
          100: "#112120",
          200: "#234240",
          300: "#346461",
          400: "#468581",
          500: "#57a6a1",
          600: "#79b8b4",
          700: "#9acac7",
          800: "#bcdbd9",
          900: "#ddedec",
        },
        redAccent: {
          100: "#280b12",
          200: "#501624",
          300: "#772035",
          400: "#9f2b47",
          500: "#c73659",
          600: "#d25e7a",
          700: "#dd869b",
          800: "#e9afbd",
          900: "#f4d7de",
        },
        blueAccent: {
          100: "#000a1b",
          200: "#001435",
          300: "#001e50",
          400: "#00286a",
          500: "#003285",
          600: "#335b9d",
          700: "#6684b6",
          800: "#99adce",
          900: "#ccd6e7",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[400],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[400],
              light: colors.grey[100],
            },
            background: {
              default: "#ededed",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
