import { Contract } from "@ethersproject/contracts";
import { useContractFunction, useEthers } from "@usedapp/core";
import { ButtonConfirmed } from "../components/Button";
import { ProductCarousel } from "../components/ProductCarousel";
import { useContract } from "../hooks/useContract";
import { useERC721 } from "../hooks/useERC721";
import { useModals } from "../hooks/useModals";
import { MintButton } from "../components/MintButton";
import { Tag } from "degen";

const Mint = () => {
  const { maxSupply, totalSupply, isSaleActive } = useERC721();
  const { account } = useEthers();
  const { showWalletModal } = useModals();

  return (
    <div className="bg-brand min-w-full border-b border-gray-200 text-brand-text min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col-reverse lg:flex-row justify-between mb-20">
          <section className="w-full lg:w-1/2 lg:pr-10">
            <div className="border-0 lg:border border-gray-100 px-8 py-12 rounded-[44px] lg:max-w-[440px]">
              <span className="block text-4xl text-white">netc0 mask</span>
              <div className="flex mt-4">
                <span className="font-bold text-gray-100 mr-3">0.05Ξ</span>
                <Tag
                  label={totalSupply === maxSupply ? "Sold out" : "Remaining"}
                >
                  {totalSupply} / {maxSupply}
                </Tag>
              </div>
              <span className="mt-4 block mb-4 text-gray-400">
                Our very first asset.
                <br />
                <br />
                A soft augmented reality helmet with integrated biological
                defence and sound control.
                <br />
                <br />
                Click &#39;Buy&#39; to obtain a digital version of your mask.
                <br />
                <br />
                Your key to the altr_ ecosystem
              </span>
              <MintButton />
            </div>
          </section>
          <section className="w-full lg:w-1/2 static lg:sticky top-28">
            <ProductCarousel />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Mint;
