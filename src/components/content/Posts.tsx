import { Post } from "@/types/Post"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

interface PostProps{
  posts: Post[]
}

function Posts({posts}:PostProps){
  return(
    <ul>
      {posts.map((post) =>(
        <li className="px-5 py-4 flex gap-4 border-b border-gray-500">
          <Avatar>
            {post.avatar ? <AvatarImage src={post.avatar}/> : <AvatarFallback>{post.name.charAt(0)}</AvatarFallback> }
          </Avatar>
          <div id="row" className="text-white">
          <div id="user-info" className="flex gap-1 pb-1">
          <p>{post.name}</p>
          <p className="text-gray-500">{post.username}</p>
          <p> • 4h</p>
          </div>
          <p className="pb-1">{post.text}</p>
          {post.image ? <img src={post.image} className="max-w-[400px] max-h-[500px] min-w-[200px] rounded-md pb-1"/> : null }
          <div id="action-post">
            
          </div>
          </div>
        </li>        
      ))}
    </ul>
  )

}

export default Posts