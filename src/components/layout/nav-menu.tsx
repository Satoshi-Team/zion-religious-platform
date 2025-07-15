'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "@/hooks/use-translations"

export function NavMenu() {
  const pathname = usePathname()
  const { t } = useTranslations()

  const navItems = [
    { href: "/", label: t('common.navigation.home') },
    { href: "/sacred-texts", label: t('common.navigation.sacredTexts') },
    { href: "/studies", label: t('common.navigation.studies') },
    { href: "/teachings", label: t('common.navigation.teachings') },
    { href: "/blog", label: t('common.navigation.blog') },
    { href: "/resources", label: t('common.navigation.resources') },
    { href: "/meditation", label: t('common.navigation.meditation') }
  ]

  return (
    <nav className="flex gap-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${
              isActive 
                ? "text-foreground font-semibold" 
                : "text-muted-foreground hover:text-foreground"
            } transition-colors`}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
} 