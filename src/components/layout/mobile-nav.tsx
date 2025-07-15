'use client'

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "@/hooks/use-translations"

export function MobileNav({ className }: { className?: string }) {
  const pathname = usePathname()
  const { t } = useTranslations()

  const navigationItems = [
    { href: "/", label: t("common.navigation.home") },
    { href: "/sacred-texts", label: t("common.navigation.sacredTexts") },
    { href: "/studies", label: t("common.navigation.studies") },
    { href: "/teachings", label: t("common.navigation.teachings") },
    { href: "/blog", label: t("common.navigation.blog") },
    { href: "/resources", label: t("common.navigation.resources") },
    { href: "/meditation", label: t("common.navigation.meditation") }
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="flex flex-col space-y-4">
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
      </SheetContent>
    </Sheet>
  )
} 