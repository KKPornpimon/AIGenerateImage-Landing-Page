import About from "./About/About"
import Faq from "./Faq/Faq"
import Footer from "./Footer/Footer"
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
        <Footer />
    </div>
  )
}
export default Home