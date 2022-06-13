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
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {

  
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>altr_</title>
        <meta name="title" content="vision_" />
        <meta
          name="description"
          content="altr_ is a digital-first fashion house for the metaverse. Built and owned by creators."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.altr.space/" />
        <meta property="og:title" content="altr_" />
        <meta
          property="og:description"
          content="altr_ is a digital-first fashion house for the metaverse. Built and owned by creators."
        />
        <meta
          property="og:image"
          content="https://uploads-ssl.webflow.com/61a7d8ae6f4b2b1c4b243ae8/62044250c27d2410ff2dc845_social-cover.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.altr.space/" />
        <meta property="twitter:title" content="altr_" />
        <meta
          property="twitter:description"
          content="altr_ is a digital-first fashion house for the metaverse. Built and owned by creators."
        />
        <meta
          property="twitter:image"
          content="https://uploads-ssl.webflow.com/61a7d8ae6f4b2b1c4b243ae8/62044250c27d2410ff2dc845_social-cover.png"
        />
      </Head>
      <DAppProvider config={config}>
        <ThemeProvider defaultMode="dark" defaultAccent="green">
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </ThemeProvider>
      </DAppProvider>
    </>
  );
}

export default MyApp;
