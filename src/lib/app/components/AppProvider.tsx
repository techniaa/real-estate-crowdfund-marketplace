import {
  ChakraProvider,
  ChakraProviderProps,
  CSSReset,
} from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import defaultTheme from "@/theme";
import { GlobalModalProvider } from "@/modules/modals";
import { WalletProvider } from "@/lib/wallet";
import { AppContext } from "../hooks";
import config from "@/config.json";

interface AppProviderProps {
  children: ReactNode;
  theme?: ChakraProviderProps["theme"];
}
const AppProvider: FC<AppProviderProps> = (props) => {
  const { children, theme = defaultTheme } = props;

  return (
    <AppContext.Provider value={{ config }}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <WalletProvider>
          <GlobalModalProvider>{children}</GlobalModalProvider>
        </WalletProvider>
      </ChakraProvider>
    </AppContext.Provider>
  );
};

export default AppProvider;
