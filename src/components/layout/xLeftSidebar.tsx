import Logo from "../../assets/logo.svg"
import { Home, UserRoundSearch, Heart, CircleUser, LogOut  } from "lucide-react"
 
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "../ui/button"
 
// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Search",
    url: "#",
    icon: UserRoundSearch,
  },
  {
    title: "Follows",
    url: "#",
    icon: Heart,
  },
  {
    title: "Profile",
    url: "#",
    icon: CircleUser,
  },
]
 
export function LeftSidebar() {
  return (

    <Sidebar side="left" variant="inset">
      <SidebarContent className="bg-[#1D1D1D]">
        <SidebarHeader><img src={Logo} className="w-24 m-3" /></SidebarHeader>
        <SidebarGroup className="h-full">
          <SidebarGroupContent className="space-y-3">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="text-white"/>
                      <span className="text-white">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <SidebarMenuButton asChild className="bg-[#04A51E] ">
              <a href="#">
                <span className="text-white text-center w-full">Creat Post</span>
              </a>
            </SidebarMenuButton>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarFooter className= "text-white">
          <Button>
           <span>LogOut</span>
          <LogOut />
          </Button>
          
          </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  )
}