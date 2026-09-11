import { cn } from "@/lib/utils";

type SidebarSectionProps = {
  title: string;
  className?: string;
  children: React.ReactNode;
};

export default function SidebarSection({ title, className, children }: SidebarSectionProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label className="font-semibold text-xs text-muted-foreground">{title}</label>
      {children}
    </div>
  );
}