import Posts from "@/components/content/Posts";
import StatusForm from "@/components/content/StatusForm";
import DummyPost from "@/dummy/posts";

export function Home(){
  return (
    <div className="max-w-[748px] border border-gray-500">
      <h1 className="text-[#FFFFFF] text-[28px] pt-10 px-5 pb-2 border-b border-gray-500">Home</h1>
      <StatusForm />
      <Posts posts={DummyPost} />
    </div>
  )
}