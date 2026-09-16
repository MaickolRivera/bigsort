import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type DropdownProps<T extends string> = {
  values: T[]
  selectedValue: T
  setSelectedValue: (value: T) => void
  onSelected?: (option: T) => void
  ariaLabel?: string
}

export default function Dropdown<T extends string>({
  values,
  selectedValue,
  setSelectedValue,
  onSelected,
  ariaLabel,
}: DropdownProps<T>) {
  const handleSelected = (value: string) => {
    setSelectedValue(value as T)
    onSelected?.(value as T)
  }

  return (
    <Select value={selectedValue} onValueChange={handleSelected}>
      <SelectTrigger className="w-full cursor-pointer" aria-label={ariaLabel}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {values.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}