import DummyPost from "@/assets/dummy/threats";
import ThreatDetail from "@/components/detail/ThreatDetail";
import RepliesList from "@/components/detail/RepliesList";
import ReplyForm from "@/components/detail/ReplyForm";
import { NavLink, useParams } from "react-router";
import { IoMdArrowBack } from "react-icons/io";

function Detail(){
  const { id } = useParams();
  const numericalId = Number(id);
  return(
    <div id="detail-post-page" className="border-x border-[#3F3F3F]">
      <div className="text-white
      font-bold
      pt-10 pb-2 px-5
      flex flex-row gap-2.5
      items-center">
        <NavLink to={'/home'}><IoMdArrowBack className="size-7" /></NavLink>
        <h1 className="text-[28px]">Status</h1>
        </div>
      <ThreatDetail threats={DummyPost} index={numericalId} />
      <ReplyForm />
      <RepliesList threats={DummyPost} index={numericalId} />
    </div>
    
  )
}

export default Detail