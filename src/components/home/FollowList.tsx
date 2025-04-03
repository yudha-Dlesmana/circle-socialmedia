import { FollowProps } from "@/types/Follow"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import ToggleFollow from "../utils/ButtonFollow"

interface Follows{
  Follows: FollowProps[]
}
function FollowList({Follows} : Follows){
  return(
  <ul id="follow-list" className="">
    {Follows.map((follows) => (
      <li id="item-follow" className="
      px-6 py-2
      flex gap-4">
        <Avatar>
          {follows.avatar ? 
            <AvatarImage src={follows.avatar} className=""/> : 
            <AvatarFallback>{follows.name.charAt(0)}</AvatarFallback> }

        </Avatar>
        <div className="">
        <h1 id="suggested-name" className="text-[#FFFFFF] font-bold">
          {follows.name}</h1>
        <p id="suggested-username" className="text-[#909090]">{follows.username}</p>
        </div>
        <ToggleFollow  isTrue={follows.isFollowed}/>
        
      </li>
    ))}
  </ul>
  )
}


export default FollowList