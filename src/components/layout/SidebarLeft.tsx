import Logo from "../../assets/logo.svg"
import { UserSearch } from 'lucide-react';
import { Heart } from 'lucide-react';
import { GoHomeFill } from "react-icons/go";
import { CircleUserRound } from 'lucide-react';
import { TbLogout2 } from "react-icons/tb";
import { useState } from "react";
import ModalThreat from "../utils/ModalThreatForm";
import useAuthStore from "@/stores/AuthStore";

export default function SidebarLeft(){

  const [showModal, setShowModal] = useState(false);
  const { logOut } = useAuthStore()

  return (
    <div id="sidebar-left" className="text-white
    w-[417px] h-screen  p-[40px]
    border-[#3F3F3F] flex flex-col
    ">
      <img id=".logo" className="w-56
      px-5 mb-3" src={Logo} />

      <ul id=".list-menu"
      className="flex-grow">
        <li id=".home"
        className="
        text-xl
        px-5 py-4 
        flex gap-4
        items-center
        ">
          <GoHomeFill className="size-8" />
          Home
          </li>
        <li id=".search"
        className="
        text-xl
        px-5 py-4 
        flex gap-4
        items-center
        ">
          <UserSearch className="size-8" />
          Search
          </li>
        <li id=".follows" 
        className="
        text-xl
        px-5 py-4 
        flex gap-4
        items-center"
        >
          <Heart className="size-8" />
          Follows
          </li>
        <li id=".profile"
        className="
        text-xl
        px-5 py-4 
        flex gap-4
        items-center">
          <CircleUserRound className="size-8" />
          Profile
          </li>
        <button id="treate-post-button"
        onClick={() => setShowModal(true)}
        className="
        text-xl justify-center font-bold
        w-full h-[52px]
        px-5 py-4 
        flex gap-4
        items-center
        rounded-full
      bg-[#04A51E]
      hover:bg-[#005E0E]
        ">
          Create Post
          </button>
      </ul>
      
      <footer id=".logout">
        <button className="
        text-xl
        px-5 
        flex gap-3 items-center"
        onClick={logOut}>
        <TbLogout2 className="size-8"/>
        LogOut
        </button>
      </footer>
      <ModalThreat isOpen={showModal} onClose={() => setShowModal(false)} />
      
    </div>
  )
}