"use client"

import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'
import { locales, localeFlags } from '@/config/i18n'
import { useTranslation } from '@/lib/translation-provider'

export function LanguageSwitcher() {
  const pathname = usePathname() || ''
  const { currentLanguage } = useTranslation()
  const segments = pathname.split('/')
  const currentPath = segments.slice(2).join('/')

  const handleLanguageChange = (newLocale: string) => {
    const newPath = `/${newLocale}/${currentPath}`
    window.location.href = newPath
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Select language">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.code}
            onClick={() => handleLanguageChange(locale.code)}
            className={currentLanguage === locale.code ? 'bg-accent' : ''}
          >
            <span className="mr-2">{localeFlags[locale.code]}</span>
            {locale.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 