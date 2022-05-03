import { ReactChild, useEffect } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Image from "next/image";
import cornersquare from "../public/cornersquare.png";
import BaseModal from "../components/Modals/BaseModal";
import { Notifications } from "../components/Notifications";
import { injected } from "../config/connectors";
import { ChainId, DAppProvider, useEthers } from "@usedapp/core";
import { config } from "../config/chainConfig";
import { useSpecificNetwork } from "../hooks/useSpecificNetwork";
import { DEFAULT_CHAIN } from "../constants/ChainId";

export const PageLayout = ({
  children,
}: {
  children: ReactChild | ReactChild[];
}) => {
  // shows wrong network modal if user not connected to ropsten
  useSpecificNetwork(DEFAULT_CHAIN);

  return (
    <>
      {/* <div className="fixed left-[26px] bottom-[26px] inline-flex">
        <Image width="21px" height="21px" src={cornersquare} alt="" />
      </div>
      <div className="fixed right-[26px] bottom-[26px] inline-flex">
        <Image width="21px" height="21px" src={cornersquare} alt="" />
      </div> */}
      <BaseModal />
      <Header />
      <div className="bg-brand min-w-full text-brand-text h-[calc(100vh-96px)]">
        <div className="mx-auto min-h-full">{children}</div>
      </div>
      {/* <Notifications /> */}
    </>
  );
};
