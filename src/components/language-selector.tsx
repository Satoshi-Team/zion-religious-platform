'use client'

import React from 'react'
import { languages } from '@/lib/i18n/config'
import { cn } from '@/lib/utils'
import { Globe } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function LanguageSelector() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (lang: string) => {
    router.push(`/${lang}`)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md",
          "hover:bg-accent hover:text-accent-foreground",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        )}
      >
        <Globe className="w-4 h-4" />
        <span>Language</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-popover ring-1 ring-black ring-opacity-5 max-h-[60vh] overflow-y-auto">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {Object.entries(languages).map(([code, { name, nativeName }]) => (
              <button
                key={code}
                onClick={() => handleLanguageChange(code)}
                className={cn(
                  "w-full text-left px-4 py-2 text-sm",
                  "hover:bg-accent hover:text-accent-foreground",
                  "focus:outline-none focus:bg-accent focus:text-accent-foreground"
                )}
                role="menuitem"
              >
                <div className="flex items-center justify-between">
                  <span>{name}</span>
                  <span className="text-muted-foreground">{nativeName}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}