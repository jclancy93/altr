import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import mask from "../public/mask.png";
import mask1 from "../public/mask1.png";
import maskMobile from "../public/mask-mobile.png";
import mask1Mobile from "../public/mask1-mobile.png";
import { Canvas } from "@react-three/fiber";
import { Suspense, lazy } from "react";
import dynamic from "next/dynamic";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Box } from "@react-three/drei";
import { useWindowSize } from "../hooks/useWindowSize";
// import ModelViewer from "react-model-viewer";

const ModelComponent = dynamic(() => import("./Model"), { ssr: false });

export const ProductCarousel = () => {
  const { width } = useWindowSize();

  return (
    <>
      <Carousel
        showThumbs={false}
        statusFormatter={() => ""}
        dynamicHeight={false}
        className="flex justify-center items-center"
      >
        <div>
          <ModelComponent />
        </div>
        <div>
          <Image
            src={width || 0 > 512 ? mask1 : mask1Mobile}
            alt="Mask Image 2"
            objectFit="contain"
          />
        </div>
        <div style={{ maxHeight: "500px", backgroundSize: "contain" }}>
          <Image src={mask} alt="Mask Image 3" objectFit="contain" />
        </div>
      </Carousel>
    </>
  );
};
