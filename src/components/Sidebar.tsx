import { useState } from "react";

type Side = "left" | "right";

type SidebarProps = {
  title: string;
  side: Side;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  children?: React.ReactNode;
};

const sideConfig: Record<Side, { sizeSidebar: string; position: string}> = {
  left: {
    sizeSidebar: "w-screen lg:w-80 z-20",
    position: "left-0 lg:left-2",
  },
  right: {
    sizeSidebar: "w-screen lg:w-90",
    position: "right-0 lg:right-2",
  },
};

export default function Sidebar({ title, icon: Icon, children, side }: SidebarProps) {
  const { sizeSidebar, position } = sideConfig[side];
  const [isOpen, setIsOpen] = useState(() => window.innerWidth >= 1024);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <aside
      className={`
        ${position}
        border border-sidebar-border rounded-md bg-sidebar text-sidebar-foreground transition-all duration-300
        flex flex-col fixed z-10 
        
        top-0 bottom-0 
        px-5 py-5 pb-1
        lg:top-2 lg:bottom-5 
        lg:px-5 
        ${isOpen
          ? `${sizeSidebar} overflow-y-scroll scroll-bar-custom`
          : "w-16.5 h-19 lg:h-auto justify-start items-start"
        }
      `}
    >
      <div
        className={`
          flex items-center cursor-pointer transition-all duration-300
          ${isOpen ? "justify-start gap-5" : "justify-start"}
        `}
        onClick={toggleSidebar}
      >
        <Icon className="shrink-0" />
        <h2
          className={`
            font-bold text-xl transition-all duration-300 overflow-hidden
            ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"}
          `}
        >
          {title}
        </h2>
      </div>

      {children && (
        <div
          className={`
            h-[calc(100%-4rem)] mt-4 
            flex flex-col justify-between 
            transition-opacity duration-300
            
            ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
        >
          {children}
        </div>
      )}
    </aside>
  );
}