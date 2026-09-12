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
      className={cn(className)}
    >
      <IconRandom></IconRandom>
    </Button>
  )
}