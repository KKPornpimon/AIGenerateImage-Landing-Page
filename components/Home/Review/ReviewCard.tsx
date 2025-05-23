import { QuoteIcon } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

type Props = {
  image: string,
  name: string,
  role: string
}

const ReviewCard = ({image, name, role}: Props) => {
  return (
    <div className="px-16 my-10 flex flex-col items-center justify-center">
        <QuoteIcon className="w-10 h-10 text-yellow-300" />
        <p className="text-center mt-4 text-white text-base md:text-lg lg:text-xl font-simibold text-opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Amet sint exercitationem officiis perspiciatis beatae iusto eaque nesciunt, unde neque cumque.
        </p>
        <div className="mt-9">
          <h1 className="text-white text-base md:text-2xl font-bold text-center capitalize">{name}</h1>
          <p className="text-white text-sm md:text-lg text-center capitalize">{role}</p>
          <div className=" p-3 flex items-center justify-center">
            <Avatar>
              <AvatarImage src={image} alt="@shadcn" />
              <AvatarFallback className="text-gray-300 uppercase">{name}</AvatarFallback>
            </Avatar>
          </div>
            
        </div>
    </div>
  )
}
export default ReviewCard