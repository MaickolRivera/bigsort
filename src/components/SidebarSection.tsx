type SidebarSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function SidebarSection({ title, children }: SidebarSectionProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-sm text-sidebar-foreground/60">{title}</p>
      {children}
    </div>
  );
}