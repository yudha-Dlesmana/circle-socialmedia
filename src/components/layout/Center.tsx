import SidebarLeft from "./SidebarLeft"
import SidebarRight from "./SidebarRight"

function Center({ children }: { children: React.ReactNode }) {
  return (
    <div id="layout"
    className="flex bg-[#1D1D1D]">
      <SidebarLeft />
      <div id="center"
      className="
      w-[748px]">
        {children}
      </div>
      <SidebarRight />

    </div>
  )
}

export default Center