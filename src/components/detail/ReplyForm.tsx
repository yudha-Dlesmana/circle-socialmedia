import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { LuImagePlus } from "react-icons/lu";



function ReplyForm(){
  return(
    <div className=" 
      items-center 
      p-5
      flex gap-3
      border-t
    border-[#3F3F3F]">
      <Avatar>
        <AvatarImage className="
          size-14"
        src="/avatar/avatar(2).png"/>
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <form className="
      w-full
      text-white 
      flex gap-2
       justify-items-center">
        <textarea className="
          resize-none w-full
          outline-none focus:ring-0
          "
          placeholder="Type your reply"
          />
        <label className="
        w-[63px] h-[33px] min-w-[60px] 
        flex items-center justify-center">
          <input type="file" className="hidden" />
          <button className="
          ">
            <LuImagePlus className="size-7"/>
          </button>
        </label>
        <button className="
          font-bold
          w-[63px] h-[33px] min-w-[60px] 
          rounded-full 
          p-2 pr-4 pl-4 gap-10 
          bg-[#04A51E]
          hover:bg-[#005E0E]
          flex items-center justify-center
          ">
            Reply</button>
      </form>
    </div>
    
  )
    
}

export default ReplyForm