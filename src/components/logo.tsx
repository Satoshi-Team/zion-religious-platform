"use client"

import React from 'react'
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={cn("flex items-center gap-2 transition-colors duration-200", className)}>
      <span className="text-xl">🕊️</span>
      <span className={cn(
        "text-base font-bold",
        resolvedTheme === "dark" ? "text-white" : "text-gray-900"
      )}>
        ZION.FM
      </span>
    </div>
  )
} 