import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import { theme } from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Component {...pageProps} />
        </MantineProvider>
      </body>
    </>
  );
}
