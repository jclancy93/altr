import { ethers } from "ethers"
import { useWeb3React } from "@web3-react/core"
import { useCallback } from "react"
import { ConsoleView } from "react-device-detect"
import { ChainId, useSendTransaction, useContractCalls, useEtherBalance } from "@usedapp/core"
import { NFT_ADDRESSES } from "../constants/addresses"
import ERC721ABI from "../constants/abi/ERC721.json"

export const useERC721 = () => {
    const { chainId, account, library } = useWeb3React()
    const partialCall = {
        address: '0xAB6f5Fa0e0586b8557b5692669Df16A70b1aa980',
        abi: new ethers.utils.Interface(ERC721ABI),
    }

    const balance = useEtherBalance(account)

    const [maxSupplyRaw, totalSupplyRaw, isSaleActiveRaw] = useContractCalls([
        {
            ...partialCall,
            method:'name',
            args: [],
        },
        {
            ...partialCall,
            method:'name',
            args: [],
        },
        {
            ...partialCall,
            method:'saleIsActive',
            args: [],
        },
    ])
    console.log({ balance: balance?.toString(), maxSupplyRaw })

    const maxSupply = maxSupplyRaw?.[0] ?? 0
    const totalSupply = totalSupplyRaw?.[0] ?? 0
    const isSaleActive = isSaleActiveRaw?.[0] ?? 0


    return {
        balance,
        maxSupply,
        totalSupply,
        isSaleActive
    }
}