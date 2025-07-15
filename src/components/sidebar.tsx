"use client"

import React from 'react'
import Link from "next/link"
import { useTranslations } from "@/hooks/use-translations"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookOpen, Home, Library, ScrollText, Users, Heart, Star, Leaf, Mountain, Sun, Moon, Cross, FileText } from "lucide-react"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

interface SidebarProps {
  hideHeader?: boolean
}

export function Sidebar({ hideHeader = false }: SidebarProps) {
  const { t, isLoading } = useTranslations()
  const [isReady, setIsReady] = useState(false)
  const params = useParams()
  const locale = params?.locale as string || 'en'

  // Wait for translations to be ready
  useEffect(() => {
    if (!isLoading && typeof t === 'function') {
      // Test if translations are working
      const testTranslation = t("religions.islam.title")
      if (testTranslation && testTranslation !== "religions.islam.title") {
        setIsReady(true)
      } else {
        // If translations aren't working yet, try again in a bit
        const timer = setTimeout(() => setIsReady(true), 100)
        return () => clearTimeout(timer)
      }
    }
  }, [t, isLoading])

  // Show loading state while translations aren't ready
  if (!isReady) {
    return (
      <div className="flex h-full flex-col">
        <div className="border-b p-4">
          <h2 className="text-lg font-semibold">Navigation</h2>
        </div>
        <ScrollArea className="flex-1">
          <div className="space-y-4 p-4">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="space-y-1">
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    )
  }

  const sections = [
    {
      title: "Sacred Reading",
      links: [
        { href: "/en/sacred-texts/bible", label: "Read Bible", icon: BookOpen },
        { href: "/en/sacred-texts/quran", label: "Read Quran", icon: BookOpen },
        { href: "/en/sacred-texts/torah", label: "Read Torah", icon: BookOpen },
      ],
    },
    {
      title: "Studies & Resources",
      links: [
        { href: `/${locale}/studies`, label: "Academic Studies", icon: Library },
        { href: "/resources", label: "Learning Resources", icon: ScrollText },
        { href: "/en/blog", label: "Articles & Blog", icon: FileText },
      ],
    },
    {
      title: t("religions.christianity.title") || "Christianity",
      links: [
        { href: `/${locale}/christianity/overview`, label: t("religions.christianity.links.0") || "Overview", icon: Home },
        { href: `/${locale}/christianity/theology`, label: t("religions.christianity.links.1") || "Theology", icon: BookOpen },
        { href: `/${locale}/christianity/christology`, label: t("religions.christianity.links.2") || "Christology", icon: Cross },
        { href: `/${locale}/christianity/history`, label: t("religions.christianity.links.6") || "History", icon: ScrollText },
      ],
    },
    {
      title: t("religions.islam.title") || "Islam",
      links: [
        { href: `/${locale}/religion/islam/overview`, label: t("religions.islam.links.0") || "Overview", icon: Home },
        { href: `/${locale}/religion/islam/history`, label: t("religions.islam.links.1") || "History", icon: BookOpen },
        { href: `/${locale}/religion/islam/teachings`, label: t("religions.islam.links.2") || "Teachings", icon: ScrollText },
        { href: `/${locale}/religion/islam/practices`, label: t("religions.islam.links.3") || "Practices", icon: Library },
      ],
    },
    {
      title: t("religions.hinduism.title") || "Hinduism",
      links: [
        { href: `/${locale}/religion/hinduism/overview`, label: t("religions.hinduism.links.0") || "Overview", icon: Home },
        { href: `/${locale}/religion/hinduism/scriptures`, label: t("religions.hinduism.links.1") || "Scriptures", icon: BookOpen },
        { href: `/${locale}/religion/hinduism/deities`, label: t("religions.hinduism.links.2") || "Deities", icon: Users },
        { href: `/${locale}/religion/hinduism/practices`, label: t("religions.hinduism.links.3") || "Practices", icon: ScrollText },
      ],
    },
    {
      title: t("religions.buddhism.title") || "Buddhism",
      links: [
        { href: `/${locale}/religion/buddhism/overview`, label: t("religions.buddhism.links.0") || "Overview", icon: Home },
        { href: `/${locale}/religion/buddhism/scriptures`, label: t("religions.buddhism.links.1") || "Scriptures", icon: BookOpen },
        { href: `/${locale}/religion/buddhism/teachings`, label: t("religions.buddhism.links.2") || "Teachings", icon: ScrollText },
        { href: `/${locale}/religion/buddhism/practices`, label: t("religions.buddhism.links.3") || "Practices", icon: Library },
      ],
    },
    {
      title: t("religions.judaism.title") || "Judaism",
      links: [
        { href: `/${locale}/religion/judaism/overview`, label: t("religions.judaism.links.0") || "Overview", icon: Home },
        { href: `/${locale}/religion/judaism/scriptures`, label: t("religions.judaism.links.1") || "Scriptures", icon: BookOpen },
        { href: `/${locale}/religion/judaism/history`, label: t("religions.judaism.links.2") || "History", icon: ScrollText },
        { href: `/${locale}/religion/judaism/practices`, label: t("religions.judaism.links.3") || "Practices", icon: Library },
      ],
    },
    {
      title: t("religions.sikhism.title") || "Sikhism",
      links: [
        { href: `/${locale}/religion/sikhism/overview`, label: t("religions.sikhism.links.0") || "Overview", icon: Home },
        { href: `/${locale}/religion/sikhism/scriptures`, label: t("religions.sikhism.links.1") || "Scriptures", icon: BookOpen },
        { href: `/${locale}/religion/sikhism/history`, label: t("religions.sikhism.links.2") || "History", icon: ScrollText },
        { href: `/${locale}/religion/sikhism/practices`, label: t("religions.sikhism.links.3") || "Practices", icon: Library },
      ],
    },
    {
      title: t("religions.jainism.title") || "Jainism",
      links: [
        { href: `/${locale}/religion/jainism/overview`, label: t("religions.jainism.links.0") || "Overview", icon: Home },
        { href: `/${locale}/religion/jainism/scriptures`, label: t("religions.jainism.links.1") || "Scriptures", icon: BookOpen },
        { href: `/${locale}/religion/jainism/principles`, label: t("religions.jainism.links.2") || "Principles", icon: ScrollText },
        { href: `/${locale}/religion/jainism/practices`, label: t("religions.jainism.links.3") || "Practices", icon: Library },
      ],
    },
    {
      title: t("religions.confucianism.title") || "Confucianism",
      links: [
        { href: `/${locale}/religion/confucianism/overview`, label: t("religions.confucianism.links.0") || "Overview", icon: Home },
        { href: `/${locale}/religion/confucianism/teachings`, label: t("religions.confucianism.links.1") || "Teachings", icon: BookOpen },
        { href: `/${locale}/religion/confucianism/history`, label: t("religions.confucianism.links.2") || "History", icon: ScrollText },
        { href: `/${locale}/religion/confucianism/practices`, label: t("religions.confucianism.links.3") || "Practices", icon: Library },
      ],
    },
    {
      title: t("religions.taoism.title") || "Taoism",
      links: [
        { href: `/${locale}/religion/taoism/overview`, label: t("religions.taoism.links.0") || "Overview", icon: Home },
        { href: `/${locale}/religion/taoism/teachings`, label: t("religions.taoism.links.1") || "Teachings", icon: BookOpen },
        { href: `/${locale}/religion/taoism/philosophy`, label: t("religions.taoism.links.2") || "Philosophy", icon: ScrollText },
        { href: `/${locale}/religion/taoism/practices`, label: t("religions.taoism.links.3") || "Practices", icon: Library },
      ],
    },
    {
      title: t("religions.shinto.title") || "Shinto",
      links: [
        { href: `/${locale}/religion/shinto/overview`, label: t("religions.shinto.links.0") || "Overview", icon: Home },
        { href: `/${locale}/religion/shinto/teachings`, label: t("religions.shinto.links.1") || "Teachings", icon: BookOpen },
        { href: `/${locale}/religion/shinto/history`, label: t("religions.shinto.links.2") || "History", icon: ScrollText },
        { href: `/${locale}/religion/shinto/practices`, label: t("religions.shinto.links.3") || "Practices", icon: Library },
      ],
    },
    {
      title: t("religions.bahai.title") || "Bahá'í Faith",
      links: [
        { href: `/${locale}/religion/bahai/overview`, label: t("religions.bahai.links.0") || "Overview", icon: Home },
        { href: `/${locale}/religion/bahai/teachings`, label: t("religions.bahai.links.1") || "Teachings", icon: BookOpen },
        { href: `/${locale}/religion/bahai/history`, label: t("religions.bahai.links.2") || "History", icon: ScrollText },
        { href: `/${locale}/religion/bahai/practices`, label: t("religions.bahai.links.3") || "Practices", icon: Library },
      ],
    },
    {
      title: t("religions.rastafarianism.title") || "Rastafarianism",
      links: [
        { href: `/${locale}/religion/rastafarianism/overview`, label: t("religions.rastafarianism.links.0") || "Overview", icon: Home },
        { href: `/${locale}/religion/rastafarianism/teachings`, label: t("religions.rastafarianism.links.1") || "Teachings", icon: BookOpen },
        { href: `/${locale}/religion/rastafarianism/history`, label: t("religions.rastafarianism.links.2") || "History", icon: ScrollText },
        { href: `/${locale}/religion/rastafarianism/practices`, label: t("religions.rastafarianism.links.3") || "Practices", icon: Library },
      ],
    },
  ]

  return (
    <div className="flex h-full flex-col lg:mt-14">
      {!hideHeader && (
        <div className="border-b p-4">
          <h2 className="text-lg font-semibold">{t("common.navigation.title") || "Navigation"}</h2>
        </div>
      )}
      <ScrollArea className="flex-1">
        <div className="space-y-4 p-4">
          {sections.map((section) => (
            <div key={section.title} className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.links.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent/50"
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
} 