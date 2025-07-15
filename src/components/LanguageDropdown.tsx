import React from 'react'
import { LANGUAGE_LABELS } from "@/lib/language-labels"

interface LanguageDropdownProps {
  current: string
  onChange: (lang: string) => void
}

export function LanguageDropdown({ current, onChange }: LanguageDropdownProps) {
  return (
    <select value={current} onChange={e => onChange(e.target.value)}>
      {Object.entries(LANGUAGE_LABELS).map(([code, label]) => (
        <option key={code} value={code}>{label}</option>
      ))}
    </select>
  )
} 