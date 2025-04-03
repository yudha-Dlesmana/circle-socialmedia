import { ThreatProps } from "@/types/Threat"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import ToggleLike from "../utils/ToggleLike"
import { LiaComment } from "react-icons/lia"

import setTime from "../utils/setTime"
import { MessageCircleMore } from "lucide-react"


interface ThreatDetailProps{
  threats: ThreatProps[]
  index: number
}

function ThreatDetail({threats, index}: ThreatDetailProps){
  const threatsdetail= threats[index];

  return(
    <div id="item-post-detail" className="
    px-5 py-4 flex flex-col gap-4" > 
      <div id="avatar-name-username" className="flex flex-row gap-4">
        <Avatar>
          <AvatarImage src={threatsdetail.avatar} />
          <AvatarFallback>{(threatsdetail.name.charAt(0))}</AvatarFallback>
          </Avatar>
        <div id="name-username">
          <p id="name" className="text-white">{threatsdetail.name}</p>
          <p id="username" className="text-white">{threatsdetail.username}</p>
        </div>
      </div>

      <p id="threat" className="text-white">{threatsdetail.text}</p>
      <p id="datetime" className="text-gray-500 text-sm"> {setTime(threatsdetail.postAt)}</p>

      <div id="action" className="flex flex-row gap-3">
        <ToggleLike amount={threatsdetail.liked} />
        <div className="text-gray-500
        flex flex-row items-center gap-2">
          <MessageCircleMore className="size-6"/>
          <span>{threatsdetail.replies.length}</span>
          <span>Replies</span> 
          </div>
        </div>
      </div>
  )
}

export default ThreatDetail