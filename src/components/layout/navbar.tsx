'use client'

import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslations } from "@/hooks/use-translations"
import { usePathname } from "next/navigation"

export function Navbar() {
  const { t } = useTranslations()
  const pathname = usePathname()

  const navigationItems = [
    {
      name: t('common.navigation.home'),
      href: "/",
      description: t('common.navigation.homeDescription')
    },
    {
      name: t('common.navigation.sacredTexts'),
      href: "/sacred-texts",
      description: t('common.navigation.sacredTextsDescription'),
      items: [
        {
          name: t('common.navigation.bible'),
          href: "/sacred-texts/bible",
          description: t('common.navigation.bibleDescription')
        },
        {
          name: t('common.navigation.quran'),
          href: "/sacred-texts/quran",
          description: t('common.navigation.quranDescription')
        },
        {
          name: t('common.navigation.torah'),
          href: "/sacred-texts/torah",
          description: t('common.navigation.torahDescription')
        }
      ]
    },
    {
      name: t('common.navigation.studies'),
      href: "/studies",
      description: t('common.navigation.studiesDescription'),
      items: [
        {
          name: t('common.navigation.bibleStudies'),
          href: "/studies/bible",
          description: t('common.navigation.bibleStudiesDescription')
        },
        {
          name: t('common.navigation.theology'),
          href: "/studies/theology",
          description: t('common.navigation.theologyDescription')
        },
        {
          name: t('common.navigation.churchHistory'),
          href: "/studies/history",
          description: t('common.navigation.churchHistoryDescription')
        }
      ]
    },
    {
      name: t('common.navigation.teachings'),
      href: "/teachings",
      description: t('common.navigation.teachingsDescription'),
      items: [
        {
          name: t('common.navigation.sermons'),
          href: "/teachings/sermons",
          description: t('common.navigation.sermonsDescription')
        },
        {
          name: t('common.navigation.bibleTeachings'),
          href: "/teachings/bible",
          description: t('common.navigation.bibleTeachingsDescription')
        },
        {
          name: t('common.navigation.devotionals'),
          href: "/teachings/devotionals",
          description: t('common.navigation.devotionalsDescription')
        }
      ]
    },
    {
      name: t('common.navigation.blog'),
      href: "/blog",
      description: t('common.navigation.blogDescription')
    },
    {
      name: t('common.navigation.resources'),
      href: "/resources",
      description: t('common.navigation.resourcesDescription')
    },
    {
      name: t('common.navigation.meditation'),
      href: "/meditation",
      description: t('common.navigation.meditationDescription')
    }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl text-primary">🕊️</span>
          <Link href="/" className="font-semibold tracking-tight">
            ZION.FM
          </Link>
        </div>

        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                {item.items ? (
                  <>
                    <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href={item.href}
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                {item.name}
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        {item.items.map((subItem) => (
                          <li key={subItem.href}>
                            <Link href={subItem.href} legacyBehavior passHref>
                              <NavigationMenuLink className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                pathname === subItem.href && "bg-accent"
                              )}>
                                <div className="text-sm font-medium leading-none">{subItem.name}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {subItem.description}
                                </p>
                              </NavigationMenuLink>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                      pathname === item.href && "bg-accent"
                    )}>
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
} 