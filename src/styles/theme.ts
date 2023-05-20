import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: "#f9e6eb",
      100: "#f3ccd7",
      200: "#ecb2c2",
      300: "#e598ad",
      400: "#de7e99",
      500: "#d46484", // Next Pink - Main Color
      600: "#bf3a5f",
      700: "#ab2f4b",
      800: "#971f3a",
      900: "#82192f",
    },
    blue: {
      50: "#EBF8FF",
      100: "#BEE3F8",
      200: "#90CDF4",
      300: "#63B3ED",
      400: "#4299E1",
      500: "#008DD2",
      600: "#2B6CB0",
      700: "#2C5282",
      800: "#2A4365",
      900: "#1A365D",
    },
  },
});

export default theme;
