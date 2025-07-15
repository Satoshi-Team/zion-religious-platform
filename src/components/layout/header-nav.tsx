"use client"

import React from 'react'
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useTranslations } from "@/hooks/use-translations"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

interface HeaderNavProps {
  className?: string
}

export function HeaderNav({ className }: HeaderNavProps) {
  const { t } = useTranslations()
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="container flex h-14 items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {t('common.navigation.home')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t('common.navigation.sacredTexts')}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/sacred-texts"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          {t('common.navigation.sacredTextsTitle')}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {t('common.navigation.sacredTextsDescription')}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link href="/sacred-texts/bible" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        isActive("/sacred-texts/bible") && "bg-accent"
                      )}>
                        <div className="text-sm font-medium leading-none">{t('common.navigation.bible')}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t('common.navigation.bibleDescription')}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/sacred-texts/quran" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        isActive("/sacred-texts/quran") && "bg-accent"
                      )}>
                        <div className="text-sm font-medium leading-none">{t('common.navigation.quran')}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t('common.navigation.quranDescription')}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/sacred-texts/torah" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        isActive("/sacred-texts/torah") && "bg-accent"
                      )}>
                        <div className="text-sm font-medium leading-none">{t('common.navigation.torah')}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t('common.navigation.torahDescription')}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t('common.navigation.studies')}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/studies"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          {t('common.navigation.studiesTitle')}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {t('common.navigation.studiesDescription')}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link href="/studies/bible" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        isActive("/studies/bible") && "bg-accent"
                      )}>
                        <div className="text-sm font-medium leading-none">{t('common.navigation.bibleStudies')}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t('common.navigation.bibleStudiesDescription')}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/studies/theology" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        isActive("/studies/theology") && "bg-accent"
                      )}>
                        <div className="text-sm font-medium leading-none">{t('common.navigation.theology')}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t('common.navigation.theologyDescription')}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t('common.navigation.teachings')}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/teachings"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          {t('common.navigation.teachingsTitle')}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {t('common.navigation.teachingsDescription')}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link href="/teachings/sermons" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        isActive("/teachings/sermons") && "bg-accent"
                      )}>
                        <div className="text-sm font-medium leading-none">{t('common.navigation.sermons')}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t('common.navigation.sermonsDescription')}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/teachings/bible" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        isActive("/teachings/bible") && "bg-accent"
                      )}>
                        <div className="text-sm font-medium leading-none">{t('common.navigation.bibleTeachings')}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t('common.navigation.bibleTeachingsDescription')}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {t('common.navigation.blog')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/resources" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {t('common.navigation.resources')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/meditation" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {t('common.navigation.meditation')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/auth/login">{t('common.navigation.login')}</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/auth/register">{t('common.navigation.register')}</Link>
          </Button>
        </div>
      </div>
    </header>
  )
} 