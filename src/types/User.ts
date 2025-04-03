interface users{
  profile: ProfileProps
  following: ProfileProps[]
  follower: ProfileProps[]
}

interface ProfileProps{
  id:number;
  name: string;
  username: string;
  avatar: '/avatar/avatar(2).png'
}