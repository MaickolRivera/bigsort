export type ActionType = "compare" | "swap" | "complete" | null | undefined;

export function getActionColor(isActive: boolean | undefined, actionType: ActionType): string {
  if (!isActive) return "bg-chart-1";
  if (actionType === "compare") return "bg-compare animate-compare-swap";
  if (actionType === "swap") return "bg-swap animate-compare-swap";
  if (actionType === "complete") return "bg-complete animate-complete";
  return "bg-chart-5";
}

export function getActionBadgeClass(actionType: ActionType): string {
  if (actionType === "compare") return "border-transparent bg-compare text-compare-foreground";
  if (actionType === "swap") return "border-transparent bg-swap text-swap-foreground";
  if (actionType === "complete") return "border-transparent bg-complete text-complete-foreground";
  return "bg-secondary text-secondary-foreground dark:border-transparent dark:bg-primary dark:text-primary-foreground";
}