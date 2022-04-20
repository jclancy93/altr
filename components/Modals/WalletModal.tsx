import { AbstractConnector } from "@web3-react/abstract-connector";
import { injected, walletconnect } from "../../config/connectors";
import { useModals } from "../../hooks/useModals";
import { Button } from "../Button";
import metamask from "../../public/metamask.svg";
import walletConnect from "../../public/walletConnect.svg";
import { shortenAddress } from "../../utils/shortenAddress";
import { CheckCircleIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import { CopyButton } from "../CopyButton";
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
import WalletConnectProvider from "@walletconnect/web3-provider";

function connectorToNameMapping(
  connectorName: string | undefined
): string | null {
  switch (connectorName) {
    case "InjectedConnector":
      return "MetaMask";
    case "WalletConnectConnector":
      return "WalletConnect";
  }
  return null;
}

export function WalletModal() {
  const { activate, account, connector, deactivate, activateBrowserWallet } =
    useEthers();
  const {
    network: { provider, chainId, accounts, errors },
  } = useNetwork();
  const ENSName = useLookupAddress();
  const { transactions } = useTransactions();
  const { notifications } = useNotifications();
  const { hideModal } = useModals();

  return (
    <>
      <div>
        <div className="mt-3 text-center sm:mt-5">
          <h3
            className="text-lg leading-6 font-medium text-gray-200"
            id="modal-headline"
          >
            Connect a Wallet
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              You need a web3 wallet to interact with altr. Please choose a
              wallet you have installed.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6">
        <Button
          variant="filled"
          color="gray"
          onClick={() => {
            activateBrowserWallet();
            hideModal();
          }}
          className="flex text-left py-3 items-center justify-between"
        >
          Metamask
          <Image
            src={metamask}
            className="ml-auto mx-2 h-10 w-10"
            height={24}
            width={24}
            alt=""
          />
        </Button>
      </div>
      <div className="mt-5 sm:mt-6">
        <Button
          variant="filled"
          color="gray"
          onClick={async () => {
            const provider = new WalletConnectProvider({
              infuraId: "d8df2cb7844e4a54ab0a782f608749dd",
            });
            await provider.enable();
            // @ts-expect-error
            activate(provider);
            hideModal();
            // tryActivation(walletconnect);
          }}
          className="text-left py-3 flex items-center justify-between"
        >
          WalletConnect
          <Image
            src={walletConnect}
            className="ml-auto mx-2 h-10 w-10"
            alt=""
            height={24}
            width={24}
          />
        </Button>
      </div>
    </>
  );
}
