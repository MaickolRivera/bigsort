import { Slider } from "@/components/ui/slider"
import { useTranslation } from "react-i18next"

type RangeProps = {
  value: number
  onChange: (value: number) => void
}

export default function Range({ value, onChange }: RangeProps) {
  const { t } = useTranslation("settings");

  return (
    <Slider
      aria-label={t("aria-label.range")}
      min={5}
      max={15}
      step={1}
      value={[value]}
      onValueChange={(v) => onChange(v[0])}
      className="w-full"
    />
  )
}