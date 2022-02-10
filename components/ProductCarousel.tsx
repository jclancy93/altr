import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import mask from "../public/mask.png";
import mask1 from "../public/mask1.png";

export const ProductCarousel = () => {
  return (
    <Carousel showThumbs={false}>
      <div>
        <Image src={mask} alt="Mask Image 1" />
      </div>
      <div>
        <Image src={mask1} alt="Mask Image 2" />
      </div>
      <div>
        <Image src={mask} alt="Mask Image 3" />
        {/* <h1>Test</h1> */}
      </div>
      <div>
        <Image src={mask1} alt="Mask Image 4" />
      </div>
    </Carousel>
  );
};
