import coverImg from "@/assets/cover.png"

import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LuImagePlus } from "react-icons/lu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface ModalProps{
  isOpen: boolean;
  onClose: () => void
}

function ModalEditProfile({isOpen, onClose}: ModalProps){
  const [name, setName] = useState("✨ Stella Audhina ✨")
  const [username, setUsername] = useState("audhinafh")
  const [bio, setBio] = useState("picked over by the worms, and weird fishes")
  const [avatar, setAvatar] = useState('/avatar/avatar(2).png')

  if(!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#00000066] bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#1D1D1D] rounded-2xl shadow-lg w-1/3 text-white">
        <div id="heading" className="flex px-5 py-3">
          <h1 className="flex-1/2 font-bold text-xl">Edit Profile</h1>
          <button onClick={onClose} className="text-gray-500 ">
            <IoIosCloseCircleOutline className="size-6" /></button>
          </div>
        {/* <div id="cover" className="px-5">
          <img src={coverImg} className="w-full"/>
          <label className="-mt-10 pl-4">
            <Avatar className="">
              <AvatarImage src={avatar} className="size-24" />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
          </label>

          </div> */}
          <div id="cover" className="px-5"> 
            <img src={coverImg} className="w-full" />
            <div className="-mt-15 pl-10">
              <Avatar className="inline-flex size-28 select-none items-center justify-center overflow-hidden rounded-full  bg-black align-middle">
                <button className="absolute bg-[#323232] p-2 rounded-full cursor-pointer">
                    <LuImagePlus className="text-[#FFFFFF] text-3xl" />
                  </button>
          		  <AvatarImage className="size-[104px] rounded-[inherit] object-cover"
          		  	src={avatar}
          		  	alt="Colm Tuite"
          		  	/>
          		    
          		  </Avatar>
            </div>
          </div>
            

        <div id="modal-edit-profile" className="p-5 flex flex-col gap-3"> 
          <label id="form-name" className="border-1 border-gray-500 rounded-md p-2">
            <h1 className="text-gray-500">Name</h1>
            <input id="form-name" className="
            w-full focus:outline-none focus:ring-0 focus:border-transparent"
            type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
          <label id="form-username" className="border-1 border-gray-500 rounded-md p-2">
            <h1 className="text-gray-500">Username</h1>
            <input id="form-username" className="
            w-full focus:outline-none focus:ring-0 focus:border-transparent"
            type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
          <label id="form-bio" className="border-1 border-gray-500 rounded-md p-2">
            <h1 className="text-gray-500">Bio</h1>
            <textarea id="form-bio" className="resize-none 
            w-full focus:outline-none focus:ring-0 focus:border-transparent" 
            value={bio} onChange={(e) => setBio(e.target.value)} />
            </label>
          </div>
        <div id="footer" className="pt-3 px-5 pb-5 flex justify-end">
          <button id="save-button" className="
          px-5 py-3 font-bold text-base
        bg-[#04A51E] rounded-full 
        hover:bg-[#005E0E]">Save</button>
          </div>
      </div>
    </div>
    );
  }

export default ModalEditProfile