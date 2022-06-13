import { ChainId } from "@usedapp/core"

export const DEFAULT_CHAIN = ChainId.Rinkeby;

export const CHAIN_NAMES = {
  [ChainId.Mainnet]: 'Ethereum',
  [ChainId.Ropsten]: 'Ropsten',
  [ChainId.Kovan]: 'Kovan',
  [ChainId.Rinkeby]: 'Rinkeby',
  [ChainId.Goerli]: 'Goerli',
  [ChainId.Optimism]: 'Optimism',
  [ChainId.BSC]: 'BSC',
  [ChainId.BSCTestnet]: 'BSC',
  [ChainId.xDai]: 'xDai',
  [ChainId.Polygon]: 'Polygon',
  [ChainId.Theta]: 'Theta',
  [ChainId.ThetaTestnet]: 'ThetaTestnet',
  [ChainId.Moonriver]: 'Moonriver',
  [ChainId.Mumbai]: 'Mumbai',
  [ChainId.Harmony]: 'Harmony',
  [ChainId.Palm]: 'Palm',
  [ChainId.Localhost]: 'Localhost',
  [ChainId.Hardhat]: 'Hardhat',
  [ChainId.Fantom]: 'Fantom',
  [ChainId.Arbitrum]: 'Arbitrum',
  [ChainId.Avalanche]: 'Avalanche',
}
