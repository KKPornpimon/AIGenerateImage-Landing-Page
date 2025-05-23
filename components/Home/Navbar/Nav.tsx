'use client'

import { Navlinks } from "@/constant/constant"
import { MenuIcon, Search, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

type Props = {
    openNav: () => void
}

const Nav = ({openNav}: Props) => {

    const [navbg, setNavbg] = useState(false)

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavbg(true)
            if(window.scrollY < 90) setNavbg(false)
        }
        
        window.addEventListener('scroll', handler)

        return () => window.removeEventListener('scroll', handler)
        
    }, [])

    const bg_style = navbg ? 'bg-gray-900 shadow-md' : ''

  return (
    <div className={`
        flex 
        ${bg_style}
        items-center justify-between
        h-[12vh] fixed z-[100]
        w-full mx-auto
        transition-all duration-200
    `}>

        {/* Logo */}
        <h1 className="
            md:text-3xl sm:text-2xl text-[18px] text-white 
            font-bold 
            ml-8
            md:ml-16
        ">
            Kanomsmile29
        </h1>

        {/* Navlink */}
        <div className="md:flex items-center space-x-10 hidden">
            {
                Navlinks.map((item) => {
                    return (
                        <Link 
                            key={item.id}
                            href={item.url}
                            className="
                                relative
                                text-white text-base
                                w-fit block after:block after:content-['']
                                after:absolute after:h-[3px] after:bg-yellow-400
                                after:w-full after:scale-x-0
                                after:hover:scale-x-100 after:transition
                                after:duration-300 after:origin-center
                            "
                        >
                            <p> {item.label} </p>
                        </Link>
                    )
                })
            }
        </div>
        <div className="flex items-center space-x-5 md:space-x-8 text-white mr-8 md:mr-16">
            <ShoppingCart className="cursor-pointer w-6 h-6" />
            <Search className="cursor-pointer w-6 h-6" />
            <MenuIcon 
                onClick={openNav}
                className="cursor-pointer w-6 h-6 md:hidden" 
            />
        </div>
    </div>
  )
}
export default Nav