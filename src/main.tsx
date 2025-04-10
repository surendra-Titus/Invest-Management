import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
//import { ThemeProvider } from "next-themes";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n.ts";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider value={defaultSystem}>
        {/* <ThemeProvider attribute="class" disableTransitionOnChange> */}
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
        {/* </ThemeProvider> */}
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
