'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { MobileNav } from "@/components/navigation/mobile-nav"
import { useTranslations } from "@/hooks/use-translations"
import { cn } from "@/lib/utils"

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const pathname = usePathname()
  const { t } = useTranslations()

  // Static layout, language-aware navigation
  const navigationItems = [
    { href: "/", label: t('common.navigation.home') },
    { href: "/sacred-texts", label: t('common.navigation.sacredTexts') },
    { href: "/studies", label: t('common.navigation.studies') },
    { href: "/teachings", label: t('common.navigation.teachings') },
    { href: "/blog", label: t('common.navigation.blog') },
    { href: "/resources", label: t('common.navigation.resources') },
    { href: "/meditation", label: t('common.navigation.meditation') }
  ]

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      className
    )}>
      <div className="container flex h-14 items-center px-0 md:px-4">
        <div className="flex items-center gap-2 pl-4 md:pl-0">
          <span className="text-xl text-primary">🕊️</span>
          <Link href="/" className="font-semibold tracking-tight">
            ZION.FM
          </Link>
        </div>

        <MobileNav className="ml-2" />

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-auto">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2 pr-4 md:pr-0">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
} 