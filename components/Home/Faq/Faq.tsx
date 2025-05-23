import Image from "next/image"
import FaqCard from "./FaqCard"

const Faq = () => {
  return (
    <div className="py-16">
        <div className="w-[80%] mx-auto mt-16 grid md:grid-cols-2 gap-10 items-center">
            <h1 className="ps-14 sm:px-28 text-2xl sm:text-3xl pb-4 text-white font-bold">คำถามที่พบบ่อย</h1>
            <div>
                <Image src={`/images/faq.jpg`} alt="faq" width={500} height={500} />
            </div>
            <div>
                <FaqCard />
            </div>
        </div>
        
        
    </div>
  )
}
export default Faq