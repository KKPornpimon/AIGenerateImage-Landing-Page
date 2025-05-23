'use client'

import { Button } from "@/components/ui/button"
import axios from "axios"
import { Loader } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

const Hero = () => {

    const [promt, setPromt] = useState('')
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleImageGeneration = async () => {
        setLoading(true)
        const options = {
            method: 'POST',
            url: 'https://ai-text-to-image-generator-api.p.rapidapi.com/realistic',
            headers: {
              'x-rapidapi-key': 'e336f18f3fmsh9c26eedd402dd5ep149b8ejsn2bbee906d040',
              'x-rapidapi-host': 'ai-text-to-image-generator-api.p.rapidapi.com',
              'Content-Type': 'application/json'
            },
            data: {
              inputs: promt
            }
        };
          
        try {
            const response = await axios.request(options);
            setImage(response?.data.url)
            toast.success('สร้างภาพสำเร็จ')

        } catch (error:unknown) {
            if(axios.isAxiosError(error) && error.response){
            toast.error('เกิดข้อผิดพลาดในการดาวน์โหลดภาพ!')
            }
        } finally {
            setLoading(false)
        }
    }

    const handleDownloadImage = () => {
        const link = document.createElement('a')
            link.target = '_blank'
            link.href = image
            link.download = 'kanomsmile29-generated-img-ai.jpg'
            link.click()
    }

  return (
    <div className="w-[80%] min-h-screen relative mx-auto mt-[18vh] sm:mt-[20vh]">
        <div className="relative z-10 text-white flex flex-col items-center justify-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center
                bg-gradient-to-r from-orange-300 to-cyan-500 bg-clip-text text-transparent py-2
            ">
                สร้างภาพสวยๆด้วย 
                AI{' '}
            </h1>
            <p className="mt-3 text-sm md:text-base font-semibold text-center text-gray-300">
                เริ่มต้นใช้งานเครื่องมือสร้างภาพที่ขับเคลื่อนด้วย AI ของฉัน
            </p>

            {/* Prompt input box */}
            <div className="h-11 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]
                bg-white rounded-lg mt-12 px-2 md:px-5 
                flex items-center justify-between
            ">
                <input 
                    type="text" 
                    placeholder="สร้างภาพตามจินตนาการของคุณ"
                    className="h-full rounded-lg outline-none w-full
                    text-black block flex-1 placeholder:text-xs sm:placeholder:text-base
                    "
                    value={promt}
                    onChange={(e) => setPromt(e.target.value) }
                />
                <Button 
                    onClick={handleImageGeneration}
                    variant={'default'} 
                    className="bg-blue-700 hover:bg-[#06b6d4] border-2 ml-18 rounded-lg"
                > Generate </Button>
            </div>
            

            {/* Tags */}
            <div className="flex items-center justify-center space-x-4 flex-wrap space-y-3">
                <p className="mt-2"> Tag ยอดนิยม :  </p>
                <Button className="tag-btn"> Creative </Button>
                <Button className="tag-btn"> Hyperreality </Button>
                <Button className="tag-btn"> Steampunk </Button>
                <Button className="tag-btn"> Animation </Button>
                <Button className="tag-btn"> Business </Button>
            </div>

            {/* show loading and image */}
            {
                loading && ( <div><Loader className="animate-spin mt-6" /></div> )
            }
            {
                image && (
                    <div className="mt-8 flex flex-col items-center">
                        <img 
                            src={image} 
                            alt="ai image"
                            className="max-w-full h-[500px] rounded-lg shadow-lg"
                            loading='lazy'
                        />
                        <Button 
                            onClick={handleDownloadImage}
                            className="my-4 bg-orange-500 hover:bg-orange-800"> 
                            Download 
                        </Button>
                    </div>
                )
            }

        </div>
    </div>
  )
}
export default Hero