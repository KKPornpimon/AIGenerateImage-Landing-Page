import { Navlinks } from "@/constant/constant"
import { XIcon } from "lucide-react"
import Link from "next/link"

type Props = {
  showNav: boolean
  closeNav: () => void
}

const MobileNav = ({showNav, closeNav}: Props) => {

  const navOpen = showNav ? 'translate-y-0' : 'translate-y-[-200%]'

  return (
    <div className={`
      ${navOpen}
       text-white fixed justify-center flex flex-col 
      h-screen w-full
      transform transition-all duration-1000
      bg-gray-950 space-y-6 z-[1050] top-0
    `}>

      {
        Navlinks.map((item) => {
          return (
            <Link 
              key={item.id}
              href={item.url}
            >
              <p className="
                text-white w-fit text-xl ml-12
                border-b-[1.5px] pb-1 border-white sm:text-[30px]
              ">
                {item.label}
              </p>
            </Link>
          )
        })
      }

      {/* Close Icon */}
      <XIcon 
        onClick={closeNav}
        className="absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8"
      />
      
    </div>
  )
}
export default MobileNav