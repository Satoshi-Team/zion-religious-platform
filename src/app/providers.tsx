"use client"

import React from 'react'
import { useEffect } from "react"
import { TranslationProvider } from "@/lib/translation-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  // Add any mobile detection or other provider logic here
  useEffect(() => {
    // Any initialization logic
  }, [])

  return (
    <TranslationProvider>
      {children}
    </TranslationProvider>
  )
} 