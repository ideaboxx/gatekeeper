import "@/styles/globals.css";
import {
  baseTheme,
  ChakraProvider,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import type { AppProps } from "next/app";

// 1. Import the extendTheme function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: baseTheme.colors.teal,
};

// 3. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const defaultScheme = withDefaultColorScheme({
  colorScheme: "red",
});

const theme = extendTheme({ colors, config, defaultScheme });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
