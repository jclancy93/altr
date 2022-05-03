import Image from "next/image";
import {
  DAppProvider,
  useEtherBalance,
  useEthers,
  TransactionState,
  useNotifications,
} from "@usedapp/core";
import { Tag } from "degen";
import { useERC721 } from "../hooks/useERC721";
import { PageLayout } from "../components/PageLayout";
import { useModals } from "../hooks/useModals";
import { MintButton } from "../components/MintButton";
import { ProductCarousel } from "../components/ProductCarousel";

const Home = () => {
  const { maxSupply, totalSupply, isSaleActive } = useERC721();
  const { account } = useEthers();
  const { showWalletModal } = useModals();

  return (
    <PageLayout>
      <div className="flex flex-col-reverse lg:flex-row justify-between mt-[96px] pt-20 px-8 sm:px-12 lg:px-16">
        <section className="w-full lg:w-2/5 lg:pr-10">
          <div className="border-0 lg:border border-brand-border px-8 py-12 rounded-[44px] lg:max-w-[440px]">
            <span className="block text-4xl text-white">
              <span className="font-bold italic">nect0</span>
              <span className="font-bold italic text-outline-white text-gray-900">
                {" "}
                mask
              </span>
            </span>
            <div className="flex mt-4">
              <span className="font-bold text-gray-100 mr-3">0.05Ξ</span>
              {totalSupply > 0 && (
                <Tag
                  label={totalSupply === maxSupply ? "Sold out" : "Remaining"}
                >
                  {totalSupply} / {maxSupply}
                </Tag>
              )}
            </div>
            <span className="mt-4 block mb-4 text-gray-400">
              Our very first asset.
              <br />
              <br />
              A soft augmented reality helmet with integrated biological defence
              and sound control.
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
        <section className="w-full lg:w-3/5 static lg:sticky top-28">
          <ProductCarousel />
        </section>
      </div>
    </PageLayout>
  );
};

export default Home;
