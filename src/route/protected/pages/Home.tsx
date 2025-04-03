
import ThreatForm from "@/components/home/ThreatForm";
import DummyPost from "@/assets/dummy/threats";
import ThreatsList from "@/components/home/ThreatList";


export function Home(){
  return (
    <div id="home" className="
    border-x border-[#3F3F3F]">
      <h1 className="
      text-[#FFFFFF] text-[28px] 
      pt-10 px-5 pb-2 
      ">
        Home</h1>
      <ThreatForm />
      <ThreatsList threats={DummyPost} />
    </div>
  )
}