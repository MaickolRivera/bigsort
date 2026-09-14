type LayoutBarProps = {
  level: number;
  index: number;
  isActive?: boolean;
  actionType?: "compare" | "swap" | "complete" | null;
};

import { getActionColor } from "../lib/actionColor";

export default function LayoutBar({ level = 1, index, isActive, actionType }: LayoutBarProps) {

  const calculateHeight = (level: number): number => {
    const heightLevel = Math.max(0, Math.min(15, level));
    return Math.round(heightLevel * (300 / 14));
  };

  const height = calculateHeight(level);

  return (
    <div className="flex flex-col gap-3 items-center w-full lg:w-13">
      <div
        className={`rounded-md border border-border shrink-0 flex items-end pb-1 pt-6 w-full ${getActionColor(isActive, actionType)}`}
        style={{ height: `${height}px` }}
      >
        <p className="text-muted-foreground font-semibold text-xs text-center w-full">{level}</p>
      </div>
      <p className="text-muted-foreground text-sm text-center w-full">{index}</p>
    </div>
  );
}