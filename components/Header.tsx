import { useRouter } from "next/router";
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { classNames } from "../utils/classNames";
import { useModals } from "../hooks/useModals";
import { shortenAddress } from "../utils/shortenAddress";
import Web3Network from "./Web3Network";
import { isMobile } from "react-device-detect";
import { useEthers, useLookupAddress } from "@usedapp/core";
import Image from "next/image";
import logo from "../public/logo.png";
import lock from "../public/icons/lock.svg";
import user from "../public/icons/user.svg";
import Link from "next/link";

export function ConnectWalletButton() {
  const { account } = useEthers();
  const { showWalletModal } = useModals();
  const ENSName = useLookupAddress();
  const router = useRouter();

  return (
    <button
      type="button"
      className="relative inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-[20px] font-semibold rounded-2xl text-white bg-teal hover:bg-teal-hover focus:outline-none mx-2 w-[206px]"
      onClick={() => (!account ? showWalletModal() : router.push("/profile"))}
    >
      {!account ? (
        <div className="flex w-full">
          <Image
            src={lock}
            width="24"
            height="24"
            className="inline-block"
            alt=""
          />
          <span className="inline-flex w-full justify-center mt-0.5">
            Connect Wallet
          </span>
        </div>
      ) : (
        <div className="flex w-full">
          <Image
            src={user}
            width="24"
            height="24"
            className="inline-block"
            alt=""
          />
          <Link href="/profile">
            <a className="inline-flex w-full justify-center">Profile</a>
          </Link>
        </div>
      )}
    </button>
  );
}

export function Header() {
  return (
    <Disclosure
      as="nav"
      className="bg-brand min-w-full border-b border-brand-border fixed top-0 z-50"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8 text-gray-300">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <Image
                      src={logo}
                      alt="logo"
                      width={140}
                      height={70}
                      className="object-fill"
                    />
                  </Link>
                </div>
                <Link href="">
                  <span className="flex items-center mx-4">vision</span>
                </Link>
                <Link href="">
                  <span className="flex items-center mx-4">contact</span>
                </Link>
              </div>
              <div className="flex items-center">
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
