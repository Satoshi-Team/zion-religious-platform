"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "@/hooks/use-translations"

import { cn } from "@/lib/utils"
import { SimpleHamburgerMenu } from "@/components/simple-hamburger-menu"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function HeaderNavigation() {
  const { t } = useTranslations()
  const pathname = usePathname()
  






  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

      <nav className="container flex h-14 items-center justify-between">
        <div className="flex items-center space-x-4">
          <SimpleHamburgerMenu />

          <div className="flex items-center gap-2">
            <span className="text-xl text-primary">🕊️</span>
            <Link
              href="/"
              className="font-semibold tracking-tight text-lg md:text-xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              ZION.FM
            </Link>
          </div>
          <div className="hidden lg:block">
            <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={isActive('/') ? 'bg-accent' : ''}>
                    {t('common.navigation.home')}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t('common.navigation.sacredTexts')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <Link href="/sacred-texts" legacyBehavior passHref>
                        <NavigationMenuLink className={isActive('/sacred-texts') ? 'bg-accent' : ''}>
                          <div className="mb-2 mt-4 text-lg font-medium">
                            {t('common.navigation.sacredTextsTitle')}
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {t('common.navigation.sacredTextsDescription')}
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/sacred-texts/bible" legacyBehavior passHref>
                        <NavigationMenuLink className={isActive('/sacred-texts/bible') ? 'bg-accent' : ''}>
                          <div className="text-sm font-medium leading-none">{t('common.navigation.bible')}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {t('common.navigation.bibleDescription')}
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/sacred-texts/quran" legacyBehavior passHref>
                        <NavigationMenuLink className={isActive('/sacred-texts/quran') ? 'bg-accent' : ''}>
                          <div className="text-sm font-medium leading-none">{t('common.navigation.quran')}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {t('common.navigation.quranDescription')}
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/sacred-texts/torah" legacyBehavior passHref>
                        <NavigationMenuLink className={isActive('/sacred-texts/torah') ? 'bg-accent' : ''}>
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
                      <Link href="/studies" legacyBehavior passHref>
                        <NavigationMenuLink className={isActive('/studies') ? 'bg-accent' : ''}>
                          <div className="mb-2 mt-4 text-lg font-medium">
                            {t('common.navigation.studiesTitle')}
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {t('common.navigation.studiesDescription')}
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/studies/bible" legacyBehavior passHref>
                        <NavigationMenuLink className={isActive('/studies/bible') ? 'bg-accent' : ''}>
                          <div className="text-sm font-medium leading-none">{t('common.navigation.bibleStudies')}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {t('common.navigation.bibleStudiesDescription')}
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/studies/theology" legacyBehavior passHref>
                        <NavigationMenuLink className={isActive('/studies/theology') ? 'bg-accent' : ''}>
                          <div className="text-sm font-medium leading-none">{t('common.navigation.theology')}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {t('common.navigation.theologyDescription')}
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/studies/history" legacyBehavior passHref>
                        <NavigationMenuLink className={isActive('/studies/history') ? 'bg-accent' : ''}>
                          <div className="text-sm font-medium leading-none">{t('common.navigation.churchHistory')}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {t('common.navigation.churchHistoryDescription')}
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
                      <Link href="/teachings" legacyBehavior passHref>
                        <NavigationMenuLink className={isActive('/teachings') ? 'bg-accent' : ''}>
                          <div className="mb-2 mt-4 text-lg font-medium">
                            {t('common.navigation.teachingsTitle')}
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {t('common.navigation.teachingsDescription')}
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/teachings/sermons" legacyBehavior passHref>
                        <NavigationMenuLink className={isActive('/teachings/sermons') ? 'bg-accent' : ''}>
                          <div className="text-sm font-medium leading-none">{t('common.navigation.sermons')}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {t('common.navigation.sermonsDescription')}
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/teachings/bible" legacyBehavior passHref>
                        <NavigationMenuLink className={isActive('/teachings/bible') ? 'bg-accent' : ''}>
                          <div className="text-sm font-medium leading-none">{t('common.navigation.bibleTeachings')}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {t('common.navigation.bibleTeachingsDescription')}
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/teachings/devotionals" legacyBehavior passHref>
                        <NavigationMenuLink className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                          isActive("/teachings/devotionals") && "bg-accent"
                        )}>
                          <div className="text-sm font-medium leading-none">{t('common.navigation.devotionals')}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {t('common.navigation.devotionalsDescription')}
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t('common.navigation.blog')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/blog"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            {t('common.navigation.blogTitle')}
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {t('common.navigation.blogDescription')}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link href="/blog/hinduism" legacyBehavior passHref>
                        <NavigationMenuLink className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                          isActive("/blog/hinduism") && "bg-accent"
                        )}>
                          <div className="text-sm font-medium leading-none">{t('common.navigation.hinduism')}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {t('common.navigation.hinduismDescription')}
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/buddhism" legacyBehavior passHref>
                        <NavigationMenuLink className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                          isActive("/blog/buddhism") && "bg-accent"
                        )}>
                          <div className="text-sm font-medium leading-none">{t('common.navigation.buddhism')}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {t('common.navigation.buddhismDescription')}
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/islam" legacyBehavior passHref>
                        <NavigationMenuLink className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                          isActive("/blog/islam") && "bg-accent"
                        )}>
                          <div className="text-sm font-medium leading-none">{t('common.navigation.islam')}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {t('common.navigation.islamDescription')}
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/resources" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    isActive("/resources") && "bg-accent"
                  )}>
                    {t('common.navigation.resources')}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/meditation" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    isActive("/meditation") && "bg-accent"
                  )}>
                    {t('common.navigation.meditation')}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 sm:space-x-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
} 