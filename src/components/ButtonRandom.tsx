import { Button } from "@/components/ui/button"
import IconRandom from "./icons/general/IconRandom"

type ButtonRandomProps = {
  onClick?: () => void
}

export default function ButtonRandom({ onClick }: ButtonRandomProps) {
  return (
    <Button
      aria-label="Generate random numbers"
      onClick={onClick}
      variant="outline"
      size="icon"
      className="text-WM-subtext bg-WM-sidebar border-WM-border hover:text-WM-text hover:border-WM-subtext
      dark:text-BM-subtext dark:bg-BM-sidebar dark:border-BM-border dark:hover:text-BM-text dark:hover:border-BM-subtext"
    >
      
    <IconRandom></IconRandom>
    </Button>
  )
}