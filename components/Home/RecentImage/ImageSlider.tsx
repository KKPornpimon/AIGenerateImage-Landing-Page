'use client'

import Image from "next/image"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { GenImage } from "./ImageGenerated";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ImageSlider = () => {

  return (
    <Carousel
      arrows={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >

        {
            GenImage.map((images, index) => {
              return (
                <div key={index} className="p-4">
                  <div className="h-[400px] relative flex justify-center items-center">
                    <Image 
                        src={images.image}
                        alt="image"
                        width={500}
                        height={500}
                        className="object-cover rounded-md w-full h-full"
                        priority
                    />
                  </div>   
                </div>
              )
            })

        }


    </Carousel>
  );
};
export default ImageSlider;
