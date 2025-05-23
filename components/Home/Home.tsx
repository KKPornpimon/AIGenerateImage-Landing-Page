'use client'

import { useEffect } from "react"
import About from "./About/About"
import Faq from "./Faq/Faq"
import Footer from "./Footer/Footer"
import Hero from "./Hero/Hero"
import RecentImageSlide from "./RecentImage/RecentImage"
import Review from "./Review/Review"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import('aos')
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom'
      })
    }
    initAOS()
  },[])

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