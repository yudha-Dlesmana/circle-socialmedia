import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import cover from "../../assets/cover.png"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import logodw from "../../assets/logodw.svg"
import FollowList from "../home/FollowList";
import followDummy from "../../assets/dummy/follows"
import { useState } from "react";
import ModalEditProfile from "../utils/ModalEditProfileForm";

export default function SidebarRight(){
  const [showModal, setShowModal] = useState(false)
  return (
    <div id="sidebar-Right"
    className="
    w-[563px]
    p-[40px]
    space-y-4
    ">
      <div id="profile" className="bg-[#262626]
      text-white
      pt-2 pb-3 
      rounded-lg">
        <h1 id=".profile-section" className="
        text-[20px] font-bold
        px-6 py-2">
          My Profile</h1>
        <div id="Frame 1000008661" className="
        py-[10px] px-[24px]">
          
          <div id="profile-pict" className=""> 
            <img src={cover} className="" />
            <div className="-mt-10 pl-4">
              <Avatar className="inline-flex size-16 select-none items-center justify-center overflow-hidden rounded-full  bg-black align-middle">
                <AvatarImage src="/avatar/avatar(2).png" className="size-[60px] " />
                <AvatarFallback className="">
                  C</AvatarFallback>
                </Avatar>
              </div>
            <div id="edit-button-wrapper" className="-mt-4 flex w-full justify-end">
              <button id="edit-button" onClick={() => setShowModal(true)} className="font-bold py-2 px-4 border rounded-full">
                Edit Profile</button>
            </div>
              
            </div>


          <div id="profile-info" className="space-y-1">
            <h1 id="name" className="
            text-2xl font-bold">
              ✨ Stella Audhina ✨</h1>
            <h3 id="username" className="
            text-sm text-gray-500">
              @username</h3>
            <p id="bio">
              picked over by the worms, and weird fishes</p>
            <ul id="item-follow" className="
            flex gap-6">
                <li id="following" className="
                flex gap-2
                items-center">
                  <p className="font-bold">291</p>
                  <p className="text-gray-500">Following</p>
                  </li>
                <li id="followers" className="
                flex gap-2 
                items-center">
                  <p className="
                  font-bold">
                    300</p>
                  <p className="
                  text-gray-500">
                    Followers</p>
                </li>
              </ul>
            </div>
          
          </div>
        </div>

      <div id="suggestion-people" className="bg-[#262626]
      text-white
      
      pt-2 pb-5 
      rounded-lg">
        <h1 id="tittle-section" className="
        px-6 py-2
        text-xl font-bold
        ">Suggested for you</h1>

        <FollowList Follows={followDummy}/>

      </div>
      <div id="meta" className="bg-[#262626]
      text-white
      h-[72px]
      py-3 px-4
      rounded-lg">
        <div id="row1" className=" text-[#B2B2B2]
        flex gap-2 items-center">
          <p className="text-white">Developed by Your Name</p>
          <p>•</p>
          <FaGithub />
          <FaLinkedin />
          <FaFacebook />
          <AiFillInstagram /></div>
        <div id="row2" className=" text-[#B2B2B2]
        flex gap-1 items-center">
          <p>Powered by</p>
          <img src={logodw} />
          <p>Dumbways Indonesia</p>
          <p>•</p>
          <p>#1 Coding Bootcamp</p></div>

        
      </div>

      <ModalEditProfile isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}