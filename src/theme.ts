import {
  DEFAULT_THEME,
  createTheme,
  MantineThemeOverride,
} from "@mantine/core";

export const theme: MantineThemeOverride = createTheme({
  ...DEFAULT_THEME,
  fontFamily: "Roboto",
  breakpoints: {
    xs: "427px",
    sm: "769px",
    md: "1025px",
    lg: "1441px",
    xl: "2561px",
  },
  colors: {
    "primary-blue": [
      "#e7f5ff",
      "#d0ebff",
      "#a5d8ff",
      "#74c0fc",
      "#4dabf7",
      "#339af0",
      "#228be6",
      "#1c7ed6",
      "#1971c2",
      "#1864ab",
    ],

    "primary-gray": [
      "#e5e5e5",
      "#f2f2f2",
      "#cccccc",
      "#b2b2b2",
      "#999999",
      "#808080",
      "#737373",
      "#595959",
      "#333333",
      "#0c0c0c",
    ],
    ...DEFAULT_THEME.colors,
  },
});
