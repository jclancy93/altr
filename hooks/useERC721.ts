import { ethers } from "ethers"
import { useCallback } from "react"
import { ConsoleView } from "react-device-detect"
import { ChainId, useSendTransaction, useContractCalls, useEtherBalance, useEthers, useContractFunction } from "@usedapp/core"
import { NFT_ADDRESSES } from "../constants/addresses"
import ERC721ABI from "../constants/abi/ERC721.json"
import { useContract } from "./useContract"

// const ERC721_ADDRESS = '0xAB6f5Fa0e0586b8557b5692669Df16A70b1aa980' // rinkeby
const ERC721_ADDRESS = '0x84B0D249405Ed0e1a215FF4B7F5BF79a8aB165Ea' //ropsten

export const useERC721 = () => {
    const { chainId, account, library } = useEthers()
    const ERC721Contract = useContract(ERC721_ADDRESS, ERC721ABI)
    const partialCall = {
        address: ERC721_ADDRESS,
        abi: new ethers.utils.Interface(ERC721ABI),
    }

    const balance = useEtherBalance(account)

    const [maxSupplyRaw, totalSupplyRaw, isSaleActiveRaw] = useContractCalls([
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
    ])

    const maxSupply = maxSupplyRaw?.[0] ?? 0
    const totalSupply = totalSupplyRaw?.[0] ?? 0
    const isSaleActive = isSaleActiveRaw?.[0] ?? 0

    // @ts-ignore
    const { state, send } = useContractFunction(ERC721Contract, 'mint', { transactionName: 'Buy Mask' })

    return {
        balance,
        isSaleActive,
        maxSupply: maxSupply.toString(),
        totalSupply: totalSupply.toString(),
        mintTransactionState: state,
        mintToken: send,
    }
}