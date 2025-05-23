import SectionHeading from "@/components/Helper/SectionHeading"
import ImageSlider from "./ImageSlider"

const RecentImageSlide = () => {
  return (
    <div className="py-16 bg-gray-950">
        {/* Heading */}
        <SectionHeading heading='สำรวจภาพล่าสุดของฉัน' />
        {/* Slider */}
        <div className="w-[90%] md:w-[80%] mx-auto mt-18">
            <ImageSlider />
        </div>
    </div>
  )
}
export default RecentImageSlide