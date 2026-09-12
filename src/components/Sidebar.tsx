import { useState } from "react";

type Side = "left" | "right";

type SidebarProps = {
  title: string;
  side: Side;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  children?: React.ReactNode;
};

const sideConfig: Record<Side, { sizeSidebar: string; position: string; rounded: string }> = {
  left: {
    sizeSidebar: "w-screen lg:w-80 z-20",
    position: "left-0 lg:left-2",
    rounded: "rounded-br-2xl lg:rounded-2xl",
  },
  right: {
    sizeSidebar: "w-screen lg:w-80",
    position: "right-0 lg:right-2",
    rounded: "rounded-bl-2xl lg:rounded-2xl",
  },
};

export default function Sidebar({ title, icon: Icon, children, side }: SidebarProps) {
  const { sizeSidebar, position, rounded } = sideConfig[side];
  const [isOpen, setIsOpen] = useState(() => window.innerWidth >= 1024);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <aside
      className={`
        fixed ${position} ${rounded} top-0 bottom-0 lg:top-2 lg:bottom-5 z-10
        border border-sidebar-border
        flex flex-col px-7 lg:px-5 py-5 bg-sidebar text-sidebar-foreground transition-all duration-300
        ${isOpen
          ? `${sizeSidebar} overflow-y-scroll scroll-bar-custom`
          : "w-19 lg:h-auto h-19 justify-start items-start"
        }
      `}
    >
      <div
        className={`
          flex items-center cursor-pointer transition-all duration-300
          ${isOpen ? "justify-start gap-3" : "justify-start"}
        `}
        onClick={toggleSidebar}
      >
        <Icon className="flex-shrink-0" />
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
            mt-6 flex flex-col h-[calc(100%-4rem)] justify-between transition-opacity duration-300
            ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
        >
          {children}
        </div>
      )}
    </aside>
  );
}