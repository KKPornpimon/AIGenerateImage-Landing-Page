'use client'

import { useState } from "react"
import MobileNav from "./MobileNav"
import Nav from "./Nav"

const ResponsiveNav = () => {

  const [showNav, setShowNav] = useState(false)

  const openNavHandler = () => setShowNav(true)
  const closeNavHandler = () => setShowNav(false)
  
  return (
    <>
        <Nav openNav={openNavHandler} />
        <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </>
  )
}
export default ResponsiveNav