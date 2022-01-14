import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "styles/customTheme";
import { store } from "store";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={customTheme} resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
