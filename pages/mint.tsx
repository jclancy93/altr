import { ButtonConfirmed } from "../components/Button";
import { ProductCarousel } from "../components/ProductCarousel";
import { useERC721 } from "../hooks/useERC721";

export const Mint = () => {
  const {
    maxSupply,
    totalSupply,
    isSaleActive,
    mintToken,
    mintTransactionState,
  } = useERC721();

  return (
    <div className="bg-gray-900 min-w-full border-b border-gray-200 text-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row justify-between">
          <section className="w-full lg:w-3/5 px-10">
            <ProductCarousel />
          </section>
          <section className="w-full lg:w-2/5 overflow-y-scroll max-h-screen">
            <span className="block">Altr Native</span>
            <span className="block font-bold mt-4">Digital Mask</span>
            <div className="flex justify-between mt-4">
              <span className="">Free</span>
              <span className="">0Ξ</span>
              <span className="">
                Supply {totalSupply} / {maxSupply}
              </span>
            </div>
            <ButtonConfirmed
              className="bg-gray-100 mt-4"
              variant="filled"
              size="lg"
              disabled={!isSaleActive ?? false}
              onClick={() => {
                console.log("start");
                mintToken();
              }}
            >
              {mintTransactionState.status === "Mining" ||
              mintTransactionState.status === "PendingSignature"
                ? "Loading..."
                : "Buy"}
            </ButtonConfirmed>
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
            </span>
          </section>
        </div>
      </div>
    </div>
  );
};
