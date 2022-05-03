import { ChainId, Config, Mainnet, Rinkeby, Ropsten } from "@usedapp/core";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const config: Config = {
    readOnlyChainId: 3,
    readOnlyUrls: {
      [Ropsten.chainId]:
        "https://ropsten.infura.io/v3/ff4b9e3e27404d18ae6296dcc353fd60",
    },
    notifications: {
      checkInterval: 1000,
      expirationPeriod: 10000
    },
    localStorage: {
      transactionPath: 'transactions'
    },
    autoConnect: true,
  };
  
export const NETWORK_CONNECTIONS = {
    [ChainId.Mainnet]: "https://mainnet.infura.io/v3/f88abc181a4a45a6bc47bdda05a94944",
    [ChainId.Ropsten]: "https://ropsten.infura.io/v3/f88abc181a4a45a6bc47bdda05a94944",
    [ChainId.Rinkeby]: "https://rinkeby.infura.io/v3/ff4b9e3e27404d18ae6296dcc353fd60",
    [ChainId.Localhost]: "http://127.0.0.1:8545",
};

export const web3Connector = new WalletConnectConnector({
    rpc: NETWORK_CONNECTIONS,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
});