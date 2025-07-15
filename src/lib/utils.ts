import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCountryFlag(countryCode?: string): string {
  if (!countryCode) return '🌍'
  
  // Convert country code to regional indicator symbols
  const base = 127397 // This is the offset to convert ASCII A-Z to regional indicators
  const flagEmoji = String.fromCodePoint(
    ...countryCode.toUpperCase()
      .split('')
      .map(char => char.charCodeAt(0) + base)
  )
  
  return flagEmoji
}
