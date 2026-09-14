import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import IconRandom from "./icons/general/IconRandom"

type ButtonRandomProps = {
  onClick?: () => void
  className?: string
}

export default function ButtonRandom({ onClick, className }: ButtonRandomProps) {
  return (
    <Button
      aria-label="Generate random numbers"
      onClick={onClick}
      variant="outline"
      size="icon"
      className={cn(
        "cursor-pointer shrink-0 bg-sidebar border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        className
      )}
    >
      <IconRandom />
    </Button>
  )
}