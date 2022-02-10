import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  DAppProvider,
  useEtherBalance,
  useEthers,
  TransactionState,
  useNotifications,
} from "@usedapp/core";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";
import { ModalProvider } from "../contexts/Modal";
import BaseModal from "../components/Modals/BaseModal";
import { config } from "../config/chainConfig";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useERC721 } from "../hooks/useERC721";
import { Button, ButtonConfirmed } from "../components/Button";
import { Fragment } from "react";
import { Mint } from "../pages/mint";
import { Notifications } from "../components/Notifications";

const Home = () => {
  return (
    <DAppProvider config={config}>
      <ModalProvider>
        <BaseModal />
        <Header />
        <Mint />
        <Notifications />
      </ModalProvider>
    </DAppProvider>
  );
};

export default Home;
