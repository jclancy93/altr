import { Contract } from "@ethersproject/contracts";
import { useContractFunction, useEthers } from "@usedapp/core";
import { useERC721 } from "../hooks/useERC721";
import { useModals } from "../hooks/useModals";
import { ButtonConfirmed } from "./Button";
import ERC721ABI from "../constants/abi/ERC721.json";

export const MintButton = () => {
  const { account } = useEthers();
  const { showWalletModal } = useModals();
  const { isSaleActive } = useERC721();

  const ERC721_ADDRESS = "0x84B0D249405Ed0e1a215FF4B7F5BF79a8aB165Ea"; //ropsten

  // const ERC721Contract = useContract(ERC721_ADDRESS, ERC721ABI);
  const ERC721Contract = new Contract(ERC721_ADDRESS, ERC721ABI);
  const { state, send: mintToken } = useContractFunction(
    // @ts-ignore
    ERC721Contract,
    "mint",
    {
      transactionName: "Buy Mask",
    }
  );

  console.log({ state });

  return (
    <>
      <ButtonConfirmed
        className="inline-flex items-center justify-center py-2 mt-4 font-semibold leading-6 text-sm shadow rounded-md text-white bg-blue-500 hover:bg-blue-600 transition ease-in-out duration-150"
        variant="filled"
        size="lg"
        // disabled={account ? true : !isSaleActive ? true : false}
        onClick={() => (account ? mintToken() : showWalletModal())}
      >
        {!account ? (
          "Connect Wallet to Buy"
        ) : state.status === "Mining" || state.status === "PendingSignature" ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </>
        ) : (
          "Buy"
        )}
      </ButtonConfirmed>
      {state.errorMessage && (
        <span className="text-red-400 text-center block">
          {state.errorMessage}
        </span>
      )}
    </>
  );
};