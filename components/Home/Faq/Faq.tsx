import Image from "next/image"
import FaqCard from "./FaqCard"

const Faq = () => {
  return (
    <div className="py-16">
        <h1 className="pt-8 ps-14 sm:px-28 text-2xl sm:text-3xl pb-4 text-white font-bold">คำถามที่พบบ่อย</h1>
        <div className="w-[80%] mx-auto mt-12 grid md:grid-cols-2 gap-10 items-center">           
            <div
              data-aos='fade-right'
              data-aos-anchor-placement='top-center'
              data-aos-delay='300'
            >
                <Image src={`/images/faq.jpg`} alt="faq" width={500} height={500} className='rounded-lg w-full' />
            </div>
            <div>
                <FaqCard />
            </div>
        </div>
        
        
    </div>
  )
}
export default Faq