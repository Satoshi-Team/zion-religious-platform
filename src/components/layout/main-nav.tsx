"use client"

import React from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "@/hooks/use-translations"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()
  const { t } = useTranslations()

  const mainNavItems = [
    {
      title: t('common.navigation.sacredTexts'),
      items: [
        { title: t('common.navigation.bible'), href: "/sacred-texts/bible" },
        { title: t('common.navigation.quran'), href: "/sacred-texts/quran" },
        { title: t('common.navigation.torah'), href: "/sacred-texts/torah" },
        { title: t('common.navigation.buddhistTexts'), href: "/sacred-texts/buddhist" },
        { title: t('common.navigation.hinduScriptures'), href: "/sacred-texts/hindu" },
        { title: t('common.navigation.allSacredTexts'), href: "/sacred-texts" }
      ]
    },
    {
      title: t('common.navigation.meditation'),
      items: [
        { title: t('common.navigation.christianMeditation'), href: "/meditation/christian" },
        { title: t('common.navigation.buddhistMeditation'), href: "/meditation/buddhist" },
        { title: t('common.navigation.islamicMeditation'), href: "/meditation/islamic" },
        { title: t('common.navigation.hinduMeditation'), href: "/meditation/hindu" },
        { title: t('common.navigation.modernPractices'), href: "/meditation/modern" },
        { title: t('common.navigation.allMeditation'), href: "/meditation" }
      ]
    },
    {
      title: t('common.navigation.studies'),
      items: [
        { title: t('common.navigation.studyGuides'), href: "/studies/guides" },
        { title: t('common.navigation.commentaries'), href: "/studies/commentaries" },
        { title: t('common.navigation.historicalContext'), href: "/studies/history" },
        { title: t('common.navigation.comparativeStudies'), href: "/studies/comparative" },
        { title: t('common.navigation.academicResources'), href: "/studies/academic" }
      ]
    },
    {
      title: t('common.navigation.resources'),
      items: [
        { title: t('common.navigation.religiousHistory'), href: "/resources/history" },
        { title: t('common.navigation.sacredPlaces'), href: "/resources/places" },
        { title: t('common.navigation.religiousArt'), href: "/resources/art" },
        { title: t('common.navigation.religiousMusic'), href: "/resources/music" },
        { title: t('common.navigation.religiousCalendar'), href: "/resources/calendar" }
      ]
    }
  ]

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {mainNavItems.map((group) => (
        <div key={group.title} className="relative group">
          <button className="text-sm font-medium transition-colors hover:text-primary">
            {group.title}
          </button>
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5 hidden group-hover:block">
            <div className="py-1" role="menu" aria-orientation="vertical">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href && "bg-accent text-accent-foreground"
                  )}
                  role="menuitem"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </nav>
  )
} 