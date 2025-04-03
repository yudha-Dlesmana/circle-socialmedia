import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LuImagePlus } from "react-icons/lu";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void
}

function ModalThreat({isOpen, onClose} : ModalProps){
  if(!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-[#00000066] bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#1D1D1D] p-4 rounded-lg shadow-lg w-1/3">
        <div id="close-button" className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 ">
            <IoIosCloseCircleOutline className="size-6" /></button>
          </div>
        <div id="form-status-area" className="flex gap-3"> 
          <Avatar>
              <AvatarImage className="
                size-10"
              src="/avatar/avatar(2).png"/>
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          <textarea id="" className="
            resize-none w-full h-16
            outline-none focus:ring-0
            "
            placeholder="What is happening?!"
            />
          </div>
        <div id="img-post" className="flex items-center">
          <label htmlFor="file-upload" className="cursor-pointer flex-1/2">
              <input type="file" id="file-upload" className="hidden" />
              <div className="p-2 rounded-lg text-[#04A51E] hover:text-[#005E0E] w-fit">
                <LuImagePlus className="size-7" />
              </div>
            </label>
          <button className="bg-[#04A51E] hover:bg-[#005E0E] 
          font-bold
          w-15 h-8 
          rounded-full">
            Post</button>
        </div>
          
      
      </div>
    </div>
  );
}
export default ModalThreat