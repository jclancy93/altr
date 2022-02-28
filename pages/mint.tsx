import { Contract } from "@ethersproject/contracts";
import { useContractFunction, useEthers } from "@usedapp/core";
import { ButtonConfirmed } from "../components/Button";
import { ProductCarousel } from "../components/ProductCarousel";
import { useContract } from "../hooks/useContract";
import { useERC721 } from "../hooks/useERC721";
import { useModals } from "../hooks/useModals";
import { MintButton } from "../components/MintButton";

const Mint = () => {
  const { maxSupply, totalSupply, isSaleActive } = useERC721();
  const { account } = useEthers();
  const { showWalletModal } = useModals();

  return (
    <div className="bg-brand min-w-full border-b border-gray-200 text-brand-text min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row justify-between mb-20">
          <section className="w-full lg:w-3/5 lg:pr-10 static lg:sticky lg:h-screen top-28">
            <ProductCarousel />
          </section>
          <section className="w-full lg:w-2/5 min-h-screen">
            <span className="block">Altr Native</span>
            <span className="block font-bold mt-4">Digital Mask</span>
            <div className="flex justify-between mt-4">
              <span className="w-32">Free</span>
              <span className="">0Ξ</span>
              <span className="w-32">
                Supply {totalSupply} / {maxSupply}
              </span>
            </div>
            <MintButton />
            <span className="mt-4 block">
              This collectible NFT from the digital-native sneaker brand SHOES
              53045 includes a 3D unisex pair of shoes suitable for the IMVU
              metaverse, powered by MetaJuice. A futuristic sneaker boot
              inspired by technical motocross footwear with a triple-decker
              bubble air heel, Cyb’Air Thunder features a thundering superpower
              effect.
              <br />
              <br />
              This NFT includes a 3D asset (USDZ file), 2D Collectible assets
              (.pngs), a link to a Snapchat AR try-on and a 3D Unisex pair of
              Shoes suitable for the IMVU metaverse, powered by MetaJuice. This
              collectible NFT from the digital-native sneaker brand SHOES 53045
              includes a 3D unisex pair of shoes suitable for the IMVU
              metaverse, powered by MetaJuice. A futuristic sneaker boot
              inspired by technical motocross footwear with a triple-decker
              bubble air heel, Cyb’Air Thunder features a thundering superpower
              effect.
              <br />
              <br />
              This NFT includes a 3D asset (USDZ file), 2D Collectible assets
              (.pngs), a link to a Snapchat AR try-on and a 3D Unisex pair of
              Shoes suitable for the IMVU metaverse, powered by MetaJuice. This
              collectible NFT from the digital-native sneaker brand SHOES 53045
              includes a 3D unisex pair of shoes suitable for the IMVU
              metaverse, powered by MetaJuice. A futuristic sneaker boot
              inspired by technical motocross footwear with a triple-decker
              bubble air heel, Cyb’Air Thunder features a thundering superpower
              effect.
              <br />
              <br />
              This NFT includes a 3D asset (USDZ file), 2D Collectible assets
              (.pngs), a link to a Snapchat AR try-on and a 3D Unisex pair of
              Shoes suitable for the IMVU metaverse, powered by MetaJuice. This
              collectible NFT from the digital-native sneaker brand SHOES 53045
              includes a 3D unisex pair of shoes suitable for the IMVU
              metaverse, powered by MetaJuice. A futuristic sneaker boot
              inspired by technical motocross footwear with a triple-decker
              bubble air heel, Cyb’Air Thunder features a thundering superpower
              effect.
              <br />
              <br />
              This NFT includes a 3D asset (USDZ file), 2D Collectible assets
              (.pngs), a link to a Snapchat AR try-on and a 3D Unisex pair of
              Shoes suitable for the IMVU metaverse, powered by MetaJuice.
              <br />
              <br />
              This NFT includes a 3D asset (USDZ file), 2D Collectible assets
              (.pngs), a link to a Snapchat AR try-on and a 3D Unisex pair of
              Shoes suitable for the IMVU metaverse, powered by MetaJuice. This
              collectible NFT from the digital-native sneaker brand SHOES 53045
              includes a 3D unisex pair of shoes suitable for the IMVU
              metaverse, powered by MetaJuice. A futuristic sneaker boot
              inspired by technical motocross footwear with a triple-decker
              bubble air heel, Cyb’Air Thunder features a thundering superpower
              effect.
              <br />
              <br />
              This NFT includes a 3D asset (USDZ file), 2D Collectible assets
              (.pngs), a link to a Snapchat AR try-on and a 3D Unisex pair of
              Shoes suitable for the IMVU metaverse, powered by MetaJuice. This
              collectible NFT from the digital-native sneaker brand SHOES 53045
              includes a 3D unisex pair of shoes suitable for the IMVU
              metaverse, powered by MetaJuice. A futuristic sneaker boot
              inspired by technical motocross footwear with a triple-decker
              bubble air heel, Cyb’Air Thunder features a thundering superpower
              effect.
              <br />
              <br />
              This NFT includes a 3D asset (USDZ file), 2D Collectible assets
              (.pngs), a link to a Snapchat AR try-on and a 3D Unisex pair of
              Shoes suitable for the IMVU metaverse, powered by MetaJuice.
            </span>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Mint;
