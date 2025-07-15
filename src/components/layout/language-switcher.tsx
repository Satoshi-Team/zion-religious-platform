'use client'

import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

const LANGUAGES = {
  en: { flag: "🇬🇧", name: "English" },
  es: { flag: "🇪🇸", name: "Español" },
  zh: { flag: "🇨🇳", name: "中文" }
}

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLang = (pathname || '').split('/')[1] || 'en'
  
  const handleLanguageChange = (lang: string) => {
    const newPath = (pathname || '').replace(`/${currentLang}`, `/${lang}`)
    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(LANGUAGES).map(([code, { flag, name }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageChange(code)}
            className={`cursor-pointer ${currentLang === code ? 'font-bold' : ''}`}
          >
            <span className="mr-2">{flag}</span>
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 