import { ThreatProps } from "@/types/Threat"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import diffTime from "../utils/diffTime"
import ToggleLike from "../utils/ToggleLike"
import { MessageCircleMore } from "lucide-react"

interface RepliesListProps{
  threats: ThreatProps[]
  index: number
}

function RepliesList({threats, index}: RepliesListProps){
  const repliesList = threats[index].replies
  return(
    <ul>
      {repliesList.map((replies) => (
        <li id="repliesList" className="
        py-4 px-5 
        border-t border-[#3F3F3F]
        flex gap-3">
          <div id="" className="flex flex-row gap-2">
            <Avatar className="w-12 h-12 
          shrink-0 flex items-center 
          justify-center overflow-hidden">
              <AvatarImage src={replies.avatar} />
              <AvatarFallback>{(replies.name.charAt(0))}</AvatarFallback>
              </Avatar>
            <div>
              <div id="name-username" className="flex flex-row gap-1">
                <p id="name" className="text-white">{replies.name}</p>
                <p id="username" className="text-gray-500">{replies.username}</p>
                <p className="text-gray-500">•</p>
                <p className="text-gray-500">{diffTime(replies.postAt)}</p>
                </div>

              <p id="text" className="text-white ">{replies.text}</p>

              <div id="action" className="h-8 flex flex-row gap-3">
                <ToggleLike amount={replies.liked} />
                <div className="text-gray-500
                flex items-center gap-1">
                <MessageCircleMore className="size-6"/>
                <span>{replies.replies.length}</span>
                <span>Replies</span>
                </div>
                </div>
              </div> 
            </div>
          </li>
        ))}
      </ul>

  )
  

  

}

export default RepliesList