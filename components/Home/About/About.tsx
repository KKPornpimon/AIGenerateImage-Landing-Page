import Image from "next/image"

const About = () => {
  return (
    <div className="py-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        <div className="order-2 xl:order-1">
          <Image 
            src={`/images/ai.jpg`}
            alt="about image"
            width={400}
            height={400}
            className="rounded-lg w-full"
          />
        </div>
        <div className="order-1 xl:order-2">
          <h1 className="text-gray-300 mb-4 font-semibold text-lg capitalize">
            ทำอะไรได้บ้าง?
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4">
            ทำการสร้างภาพตามจินตนาการของคุณด้วย AI อย่างง่าย
          </h1>
          <p>
            ซึ่งภาพที่ได้นั้น สามารถดาวน์โหลดและนำไปใช้งานด้านต่างๆเช่น ใช้ในธุรกิจต่างๆที่เกี่ยวข้อง ขายภาพ โพ้สลงโซเชียล เป็นต้น โดยภาพที่ได้จะเป็นภาพที่คุณสร้างหรือออกแบบ prompt ด้วยตัวคุณเองโดยไม่ต้องกังวลเรื่องของลิขสิทธิ์รูปภาพ เพราะเป็นภาพที่คุณสร้างขึ้นมาด้วยตัวคุณเอง           </p>
        </div>
      </div>
    </div>
  )
}
export default About