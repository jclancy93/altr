import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { classNames } from "../utils/classNames";
import { useWeb3React } from "@web3-react/core";
import { useModals } from "../hooks/useModals";
import { shortenAddress } from "../utils/shortenAddress";
import Web3Network from "./Web3Network";
import { isMobile } from "react-device-detect";
import { useEthers, useLookupAddress } from "@usedapp/core";
import Image from "next/image";
import logo from "../public/logo.png";

export function ConnectWalletButton() {
  const { account } = useEthers();
  const { showWalletModal } = useModals();
  const ENSName = useLookupAddress();

  return (
    <button
      type="button"
      className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none mx-2"
      onClick={() => showWalletModal()}
    >
      {!account ? (
        <span>Connect Wallet</span>
      ) : (
        <span>{ENSName ?? shortenAddress(account)}</span>
      )}
    </button>
  );
}

export function Header() {
  return (
    <Disclosure
      as="nav"
      className="bg-brand min-w-full border-b border-gray-500 sticky top-0 z-50"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center text-white text-2xl">
                  <Image src={logo} alt="logo" width={128} height={61} />
                </div>
              </div>
              <div className="flex items-center">
                {/* <div className="flex-shrink-0">
                  {!isMobile && <Web3Network />}
                </div> */}
                <div className="flex-shrink-0">
                  <ConnectWalletButton />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
