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
      className=""
    >

    <IconRandom></IconRandom>
    </Button>
  )
}