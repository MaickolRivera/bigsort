import { cn } from "@/lib/utils"

type PanelItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  title?: string;
};

export function PanelItem({ children, onClick, className = "", title = "" }: PanelItemProps) {
  return (
    <div
      title={title}
      onClick={onClick}
      className={cn(
        "px-4 py-1.5 h-full flex justify-center text-muted-foreground border-border items-center rounded-lg border",
        className
      )}
    >
      {children}
    </div>
  );
}

type StatItemProps = {
  value: string | number;
  label: string;
  className?: string;
};

export function StatItem({ value, label, className = "" }: StatItemProps) {
  return (
    <PanelItem className={cn("flex flex-col gap-1 pt-3 pb-2", className)}>
      <pre className="text-foreground text-md">{value}</pre>
      <span className="text-muted-foreground font-semibold text-xs mb-1">{label}</span>
    </PanelItem>
  );
}

export default PanelItem;