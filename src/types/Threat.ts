interface ThreatProps {
  name: string;
  username: string;
  text: string;
  image?: string;
  avatar?: string;
  liked: number;
  replies: ThreatProps[];
  postAt: Date;
}



export type { ThreatProps }