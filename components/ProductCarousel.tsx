import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import mask from "../public/mask.png";
import mask1 from "../public/mask1.png";
import { Canvas } from "@react-three/fiber";
import { Suspense, lazy } from "react";
import dynamic from "next/dynamic";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Box } from "@react-three/drei";
// import ModelViewer from "react-model-viewer";

const ModelComponent = dynamic(() => import("./Model"), { ssr: false });

export const ProductCarousel = () => {
  return (
    <>
      <Carousel showThumbs={false}>
        <div>
          <ModelComponent />
        </div>
        <div>
          <Image src={mask1} alt="Mask Image 2" />
        </div>
        <div>
          <Image src={mask} alt="Mask Image 3" />
        </div>
        <div>
          <Image src={mask1} alt="Mask Image 4" />
        </div>
        <div>
          <Image src={mask} alt="Mask Image 1" />
        </div>
      </Carousel>
    </>
  );
};
