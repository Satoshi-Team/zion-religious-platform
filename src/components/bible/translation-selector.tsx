"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TRANSLATIONS } from "@/lib/services/bible-service"

interface TranslationSelectorProps {
  defaultValue?: string
  className?: string
}

export function TranslationSelector({ defaultValue = "NIV", className }: TranslationSelectorProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  function handleTranslationChange(value: string) {
    const params = new URLSearchParams(searchParams?.toString() || "")
    params.set("translation", value)
    router.push(`?${params.toString()}`)
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={handleTranslationChange}>
      <SelectTrigger className={className}>
        <SelectValue placeholder="Select translation" />
      </SelectTrigger>
      <SelectContent>
        {TRANSLATIONS.map((t) => (
          <SelectItem key={t.id} value={t.id}>
            {t.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
} 