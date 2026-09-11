import { Slider } from "@/components/ui/slider"

type RangeProps = {
  value: number
  onChange: (value: number) => void
}

export default function Range({ value, onChange }: RangeProps) {
  return (
    <Slider
      aria-label="Select the number of elements"
      min={5}
      max={15}
      step={1}
      value={[value]}
      onValueChange={(v) => onChange(v[0])}
      className="w-full"
    />
  )
}