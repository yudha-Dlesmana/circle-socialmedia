import { ThreatProps } from "@/types/Threat"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import ToggleLike from "../utils/ToggleLike"
import { NavLink } from "react-router";
import diffTime from "../utils/diffTime";
import { MessageCircleMore } from 'lucide-react';


interface Threats{
  threats: ThreatProps[] 
}

function ThreatsList({threats}:Threats){
  
  return(
    <ul>
      {threats.map((threat, index) => (
        <li id="item.threat" className="
          py-4 px-5 
          border-t border-[#3F3F3F]
          flex gap-3">
          <Avatar className="
          w-12 h-12 
          rounded-full bg-white
          shrink-0 flex items-center 
          justify-center overflow-hidden ">
            {threat.avatar ? 
              <AvatarImage src={threat.avatar} className="w-12 h-12"/> : 
              <AvatarFallback>{threat.name.charAt(0)}</AvatarFallback> 
            }
          </Avatar>
          <div id="row" className="text-white">
            <div id="user-info" className="flex gap-1 pb-1">
              <p>{threat.name}</p>
              <p className="text-gray-500">{threat.username}</p>
              <p className="text-gray-500"> {diffTime(threat.postAt)} </p>
              
              </div>
            <p className="pb-1">{threat.text}</p>
            {threat.image ? 
              <img src={threat.image} className="max-w-[400px] max-h-[500px] min-w-[200px] rounded-md pb-1"/> :
              null }
            <div id="action.threat" className="text-gray-500
            flex items-center gap-3">
              <ToggleLike amount={threat.liked} />
              <div className="flex items-center gap-1">
                <MessageCircleMore className="size-6"/>
                <span>{threat.replies.length}</span>
                <NavLink to={`/detail/${index}`}><span>Replies</span></NavLink>
                </div>
              </div>
            </div>
          </li>        
      ))}
    </ul> 
  )

}

export default ThreatsList