import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { DAppProvider, useEtherBalance, useEthers } from "@usedapp/core";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";
import { ModalProvider } from "../contexts/Modal";
import BaseModal from "../components/Modals/BaseModal";
import { config } from "../config/chainConfig";

const Account = () => {
  const { activateBrowserWallet, account, active } = useEthers();
  const etherBalance = useEtherBalance(account);

  return (
    <div className="bg-gray-900 min-w-full border-b border-gray-200 text-gray-100">
      {!account && (
        <button
          onClick={() => {
            console.log("test");
            activateBrowserWallet();
          }}
        >
          {" "}
          Connect{" "}
        </button>
      )}
      {account && <p>Account: {account}</p>}
      {etherBalance && <p>Balance: {etherBalance.toString()}</p>}
    </div>
  );
};

const Home = () => {
  return (
    <DAppProvider config={config}>
      <ModalProvider>
        <BaseModal />
        <Header />
        <Account />
      </ModalProvider>
    </DAppProvider>
  );
};

export default Home;
