import { useWeb3React } from "@web3-react/core";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { injected, walletconnect } from "../../config/connectors";
import { useModals } from "../../hooks/useModals";
import { Button } from "../Button";
import metamask from "../../public/metamask.svg";
import walletConnect from "../../public/walletConnect.svg";
import { shortenAddress } from "../../utils/shortenAddress";
import { CheckCircleIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import { CopyButton } from "../CopyButton";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
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
  const { activate, account, connector, deactivate } = useEthers();
  const {
    network: { provider, chainId, accounts, errors },
  } = useNetwork();
  const ENSName = useLookupAddress();
  const { transactions } = useTransactions();
  const { notifications } = useNotifications();
  const { hideModal } = useModals();
  console.log({ transactions, notifications });

  const walletSignout = () => {
    deactivate();
  };

  const tryActivation = async (connector: AbstractConnector | undefined) => {
    // if the connector is walletconnect and the user has already tried to connect, manually reset the connector
    // if (connector instanceof WalletConnectConnector) {
    //   connector.walletConnectProvider = undefined;
    // }
    if (connector) {
      try {
        await activate(connector);
        hideModal();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      {!account ? (
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
              onClick={() => tryActivation(injected)}
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
              onClick={() => {
                const test = tryActivation(walletconnect);
                console.log(test);
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
      ) : (
        <>
          <div className="text-center sm:mt-5">
            <h3
              className="text-lg leading-4 font-medium text-gray-200"
              id="modal-headline"
            >
              Account
            </h3>
            <div className="border border-gray-700 mt-6 p-4 rounded-xl text-left">
              <div className="w-full flex justify-between items-center">
                <p className="text-gray-500 text-xs font-normal">
                  Connected with{" "}
                  {connectorToNameMapping(provider?.constructor.name) ??
                    "Unknown"}
                </p>
                <Button
                  size="xs"
                  variant="outlined"
                  color="blue"
                  className="mr-2"
                  onClick={deactivate}
                >
                  Change
                </Button>
              </div>
              <div className="mt-2">
                <p className="text-bold text-lg text-gray-100">
                  {ENSName ?? shortenAddress(account)}
                </p>
                <div className="mt-2">
                  <a
                    className="cursor-pointer text-gray-500 text-xs inline-flex items-center mr-3 hover:text-gray-400"
                    // @ts-ignore
                    href={getExplorerAddressLink(account, chainId)}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <ExternalLinkIcon className="inline h-4 w-4 mr-1" />
                    View on Etherscan
                  </a>
                  <CopyButton copyText={account} />
                </div>
              </div>
            </div>
            <div className="mt-4 text-gray-400 text-light">
              {transactions.length ? (
                <>
                  <h1>Transactions</h1>
                  {transactions.map((e: StoredTransaction) => (
                    <div
                      key={e.transaction.hash}
                      className="flex justify-between"
                    >
                      <span className="flex items-center">
                        <CheckCircleIcon className="w-4 h-4 mr-2" />
                        {e.transactionName}
                      </span>
                      <a
                        className="cursor-pointer text-gray-500 text-xs inline-flex items-center mr-3 hover:text-gray-400"
                        // @ts-ignore
                        href={getExplorerTransactionLink(account, chainId)}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {shortenAddress(e.transaction.hash)}
                      </a>
                    </div>
                  ))}
                </>
              ) : (
                <h1>Transactions will appear here...</h1>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
