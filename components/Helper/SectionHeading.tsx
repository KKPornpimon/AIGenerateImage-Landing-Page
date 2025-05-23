
type Props = {
    heading: string
}


const SectionHeading = ({heading}: Props) => {
    
  return (
    <div className="w-[80%] mx-auto">
        <h1 className="text-2xl lg:text-3xl font-bold text-white"> {heading} </h1>
        <p className="text-sm sm:text-base md:text-lg font-medium mt-2 mb-10 text-gray-200">
            ภาพตัวอย่าง การ generate รูปภาพตามจินตนาการของตัวเอง
        </p>
    </div>
  )
}
export default SectionHeading