import { useState } from "react"
import { IoIosHeartEmpty,IoIosHeart } from "react-icons/io";

export default function ToggleLike({amount}:{amount: number}){
  const[like, setLike] = useState<boolean>(false);
  const[likeamount, setAmount] = useState<number>(amount)


  const Like = () => {
    setLike(!like)
    setAmount((prev) => like ? prev - 1 : prev + 1)
  }
  return (
    <button
    onClick={Like}
    className="cursor-pointer"
    >
      { like ?
      <div id="Liked"
      className="
      text-red-500
      flex gap-1 items-center">
      <IoIosHeart className="size-6" />
      <span>{likeamount}</span> 
      </div>
      : <div id="Like"
        className="
        text-gray-500
        flex gap-1 items-center text">
        <IoIosHeartEmpty className="size-6"/>
        <span>{likeamount}</span>
        </div>
      }
    </button>
  )

}