import Image from "next/image"

const About = () => {
  return (
    <div className="py-16">
      <h1 className="ps-14 sm:px-28 text-2xl sm:text-3xl pb-4 text-white font-bold">เกี่ยวกับ</h1>
      
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 p-2">
          <Image 
            src={`/images/ai.jpg`}
            alt="about image"
            width={400}
            height={400}
            className="rounded-lg w-full"
          />
        </div>
        <div className="order-1 md:order-2 p-2">
          <h2 className="text-[20px] sm:text-3xl md:text-4xl lg:text-5xl loading-8 font-bold text-white py-4">
            การสร้างภาพตามจินตนาการของคุณด้วย AI อย่างง่าย
          </h2>
          <p className="text-white indent-5 text-sm sm:text-base">
            ซึ่งภาพที่ได้นั้น สามารถดาวน์โหลดและนำไปใช้งานด้านต่างๆเช่น ใช้ในธุรกิจต่างๆที่เกี่ยวข้อง ขายภาพ โพ้สลงโซเชียล เป็นต้น โดยภาพที่ได้จะเป็นภาพที่คุณสร้างหรือออกแบบ prompt ด้วยตัวคุณเองโดยไม่ต้องกังวลเรื่องของลิขสิทธิ์รูปภาพ เพราะเป็นภาพที่คุณสร้างขึ้นมาด้วยตัวคุณเอง           </p>
        </div>
      </div>
    </div>
  )
}
export default About