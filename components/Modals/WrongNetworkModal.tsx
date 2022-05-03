import { useModals } from "../../hooks/useModals";
import { Button } from "../Button";
import {
  useTransactions,
  useLookupAddress,
  useEthers,
  useNotifications,
  StoredTransaction,
  getExplorerTransactionLink,
  useNetwork,
  getExplorerAddressLink,
} from "@usedapp/core";
import Image from "next/image";
import { CHAIN_NAMES, DEFAULT_CHAIN } from "../../constants/ChainId";
import redCross from "../../public/icons/redCross.png";

export function WrongNetworkModal() {
  const { activate, account, connector, deactivate, activateBrowserWallet } =
    useEthers();
  const {
    network: { provider, chainId, accounts, errors },
  } = useNetwork();
  const { hideModal } = useModals();

  return (
    <>
      <div className="mt-3 text-center sm:mt-5">
        <Image src={redCross} width={48} height={48} />
        <h3
          className="text-lg leading-6 font-medium text-gray-200 mt-3"
          id="modal-headline"
        >
          Wrong Network
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            You are currently on{" "}
            {chainId && chainId in CHAIN_NAMES
              ? CHAIN_NAMES[chainId]
              : "Unknown"}
            . Please switch to {CHAIN_NAMES[DEFAULT_CHAIN]}
          </p>
          <button
            type="button"
            className="relative inline-flex items-center justify-center mt-10 px-3 py-2 border border-transparent shadow-sm text-[20px] font-semibold rounded-2xl text-white bg-teal hover:bg-teal-hover focus:outline-none mx-2 w-[206px]"
            onClick={async () => {
              console.log("called");
              try {
                await window?.ethereum.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: "0x3" }],
                });
              } catch (err) {
                console.log(err);
              }
            }}
          >
            Switch chains
          </button>
        </div>
      </div>
    </>
  );
}
