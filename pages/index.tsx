import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { DAppProvider, useEtherBalance, useEthers } from "@usedapp/core";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";
import { ModalProvider } from "../contexts/Modal";
import BaseModal from "../components/Modals/BaseModal";
import { config } from "../config/chainConfig";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import mask from "../public/mask.png";
import mask1 from "../public/mask1.png";
import { useERC721 } from "../hooks/useERC721";
import { Button, ButtonConfirmed } from "../components/Button";

const ProductCarousel = () => {
  return (
    <Carousel showThumbs={false}>
      <div>
        <Image src={mask} />
      </div>
      <div>
        <Image src={mask1} />
      </div>
      <div>
        <Image src={mask} />
      </div>
      <div>
        <Image src={mask1} />
      </div>
    </Carousel>
  );
};

const Mint = () => {
  const { maxSupply, totalSupply, isSaleActive } = useERC721();

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
            >
              Buy
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
  // const { activateBrowserWallet, account, active } = useEthers();
  // const etherBalance = useEtherBalance(account);
  // return (
  //   <div className="bg-gray-900 min-w-full border-b border-gray-200 text-gray-100 min-h-screen">
  //     {!account && (
  //       <button
  //         onClick={() => {
  //           console.log("test");
  //           activateBrowserWallet();
  //         }}
  //       >
  //         {" "}
  //         Connect{" "}
  //       </button>
  //     )}
  //     {account && <p>Account: {account}</p>}
  //     {etherBalance && <p>Balance: {etherBalance.toString()}</p>}
  //   </div>
  // );
};

const Home = () => {
  return (
    <DAppProvider config={config}>
      <ModalProvider>
        <BaseModal />
        <Header />
        <Mint />
      </ModalProvider>
    </DAppProvider>
  );
};

export default Home;
