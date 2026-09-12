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
        "px-4 py-1.5 h-full flex justify-center text-WM-subtext border-WM-border dark:text-BM-subtext dark:border-BM-border items-center rounded-lg border-1",
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
      <pre className="text-WM-text dark:text-BM-text text-md">{value}</pre>
      <span className="text-WM-subtext dark:text-BM-subtext font-semibold text-xs mb-1">{label}</span>
    </PanelItem>
  );
}

export default PanelItem;