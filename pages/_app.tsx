import {
  DAppProvider,
  useEtherBalance,
  useEthers,
  TransactionState,
  useNotifications,
} from "@usedapp/core";
import { Fragment } from "react";
import { ThemeProvider } from "degen";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "../config/chainConfig";
import { ModalProvider } from "../contexts/Modal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "degen/styles";
import { Web3ReactProvider } from "@web3-react/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={config}>
      <ThemeProvider defaultMode="dark" defaultAccent="green">
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </ThemeProvider>
    </DAppProvider>
  );
}

export default MyApp;
