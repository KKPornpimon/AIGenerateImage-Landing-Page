const Footer = () => {
  return (
    <footer  className="py-16 bg-black">
        <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10
            items-start pb-8 border-b-2 border-gray-900 space-y-6 sm:space-y-0
        ">
            <div className="col-span-2">
                <p className="text-2xl sm:text-3xl md:text-4xl text-white w-[80%] font-bold">
                    พัฒนา และ สร้างสื่อดิจิทัลแห่งอนาคต
                </p>
            </div>

            <div>
                <h1 className="text-xl font-bold text-white"> ที่อยู่ </h1>
                <p className="text-white opacity-60 mt-4"> ดินแดง </p>
                <p className="text-white opacity-60"> กรุงเทพมหานคร </p>
            </div>

            <div>
                <h1 className="text-xl font-bold text-white"> ติดต่อ </h1>
                <p className="text-white opacity-60 mt-4"> อีเมล์ </p>
                <p className="text-white sm:text-xl text-lg font-bold opacity-60"> kanom7448@gmail.com </p>
            </div>
        </div>

        <div className="w-[80%] mx-auto text-gray-300 mt-6">
            Kanomsmile29 &copy; { new Date().getFullYear() }. All Rights Reserved.
        </div>
    </footer>
  )
}
export default Footer