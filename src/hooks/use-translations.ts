"use client"

import { useContext } from "react"
import { TranslationContext } from "@/lib/translation-provider"

export function useTranslations() {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error("useTranslations must be used within a TranslationProvider")
  }
  return context
} 