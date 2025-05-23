import About from "./About/About"
import Hero from "./Hero/Hero"
import RecentImageSlide from "./RecentImage/RecentImage"



const Home = () => {
  return (
    <div className="overflow-hidden ">
        <Hero />
        <RecentImageSlide />
        <About />
    </div>
  )
}
export default Home