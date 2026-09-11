import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

type SwitchOptionProps<T extends string> = {
  selectedValue: T
  setSelectedValue: (value: T) => void

  options: React.ReactNode[]
  values: T[]
  onSelected?: (value: T) => void
}

export default function SwitchOption<T extends string>({
  selectedValue,
  setSelectedValue,
  options,
  values,
  onSelected,
}: SwitchOptionProps<T>) {
  const handleValueChange = (value: string) => {
    if (!value) return
    setSelectedValue(value as T)
    onSelected?.(value as T)
  }

  return (
    <ToggleGroup
      type="single"
      value={selectedValue}
      variant="outline"
      onValueChange={handleValueChange}
      className="w-full"
    >
      {options.map((option, index) => {
        const value = values[index]
        return (
          <ToggleGroupItem
            key={value}
            value={value}
            aria-label={`Switch to ${value}`}
            className="w-full"
          >
            {option}
          </ToggleGroupItem>
        )
      })}
    </ToggleGroup>
  )
}