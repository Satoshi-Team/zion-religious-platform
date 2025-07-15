"use client"

import React from 'react'
import { useFilterStore } from "@/stores/filter-store"
import { 
  LANGUAGES, 
  LANGUAGE_DISPLAY_NAMES, 
  type Language 
} from "@/lib/constants/languages"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function LanguageFilter() {
  const { selectedLanguage, setLanguage } = useFilterStore()

  // Ensure we have a valid language or fallback to 'all'
  const currentLanguage = LANGUAGES[selectedLanguage as Language] ? selectedLanguage : 'all'

  return (
    <div className="space-y-2">
      <h2 className="text-sm font-medium tracking-tight text-muted-foreground">
        Language
      </h2>
      <Select value={currentLanguage} onValueChange={setLanguage}>
        <SelectTrigger className="w-full h-8 text-sm">
          <SelectValue>
            <div className="flex items-center gap-2">
              <span className="text-base">
                {LANGUAGES[currentLanguage as Language]}
              </span>
              <span className="text-sm text-muted-foreground">
                {LANGUAGE_DISPLAY_NAMES[currentLanguage]}
              </span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Object.entries(LANGUAGES).map(([lang, flag]) => (
              <SelectItem key={lang} value={lang} className="text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-base">{flag}</span>
                  <span>{LANGUAGE_DISPLAY_NAMES[lang]}</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}