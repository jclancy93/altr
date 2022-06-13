import { ethers } from "ethers"
import { useCallback } from "react"
import { ConsoleView } from "react-device-detect"
import { ChainId, useSendTransaction, useContractCalls, useEtherBalance, useEthers, useContractFunction, useCalls } from "@usedapp/core"
import { NFT_ADDRESSES } from "../constants/addresses"
import ERC721ABI from "../constants/abi/ERC721.json"
import { useContract } from "./useContract"

const ERC721_ADDRESS = '0x3e5145F8211A16056869072967F43dE61eb967DF' //rinkeby

export const useERC721 = () => {
    const { chainId, account, library } = useEthers()
    const ERC721Contract = new ethers.Contract(ERC721_ADDRESS, ERC721ABI)
    const partialCall = {
        address: ERC721_ADDRESS,
        contract: ERC721Contract,
    }

    const [maxSupplyRaw, totalSupplyRaw, isSaleActiveRaw, balanceOfRaw] = useCalls([
        {
            ...partialCall,
            method:'MAX_SUPPLY',
            args: [],
        },
        {
            ...partialCall,
            method:'totalSupply',
            args: [],
        },
        {
            ...partialCall,
            method:'saleIsActive',
            args: [],
        },
        {
            ...partialCall,
            method:'balanceOf',
            args: [account],
        },
    ])

    const maxSupply = maxSupplyRaw?.value?.[0] ?? 0
    const totalSupply = totalSupplyRaw?.value?.[0] ?? 0
    const isSaleActive = isSaleActiveRaw?.value?.[0] ?? 0
    const balanceOf = balanceOfRaw?.value?.[0] ?? 0

    return {
        isSaleActive: false,
        maxSupply: maxSupply.toString(),
        totalSupply: totalSupply.toString(),
        balanceOf: +balanceOf.toString(),
    }
}