type SidebarSectionProps = {
    title: string;
    children: React.ReactNode;
  };
  
  export default function SidebarSection({ title, children }: SidebarSectionProps) {
    return (
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-xs">{title}</label>
        {children}
      </div>
    );
  }
  