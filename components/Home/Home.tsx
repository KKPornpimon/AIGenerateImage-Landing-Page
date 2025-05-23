import About from "./About/About"
import Faq from "./Faq/Faq"
import Hero from "./Hero/Hero"
import RecentImageSlide from "./RecentImage/RecentImage"
import Review from "./Review/Review"



const Home = () => {
  return (
    <div className="overflow-hidden ">
        <Hero />
        <RecentImageSlide />
        <About />
        <Review />
        <Faq />
    </div>
  )
}
export default Home