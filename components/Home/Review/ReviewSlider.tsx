'use client'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ReviewCard from './ReviewCard';

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

const ReviewSlider = () => {
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
    
        <div>
            <ReviewCard image="https://github.com/shadcn.png" name="john doe" role="software engineer"/>
        </div>
        <div>
            <ReviewCard image="/images/logo-me.png" name="jane doe" role="front-end developer"/>
        </div>
        <div>
            <ReviewCard image="/images/user.png" name="johnson doe" role="back-end developer"/>
        </div>
    
    </Carousel>
  )
}
export default ReviewSlider