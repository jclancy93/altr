import { ethers } from "ethers"
import { useCallback, useEffect } from "react"
import { ChainId, useSendTransaction, useContractCalls, useEtherBalance, useEthers, useContractFunction, useCalls, Chain } from "@usedapp/core"
import { useModals } from "./useModals"

export const useSpecificNetwork = (desiredChainId: ChainId) => {
    const { chainId, account, library } = useEthers()
    const { showWrongNetworkModal, hideModal } = useModals();

    useEffect(() => {
        if (chainId && +chainId !== desiredChainId) {
            showWrongNetworkModal()
        } else {
            hideModal()
        }
    }, [chainId, desiredChainId])
}