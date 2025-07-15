"use client"

import * as React from "react"
import { useTranslations } from "@/hooks/use-translations"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  BookOpen, 
  Lightbulb, 
  Heart, 
  MapPin, 
  Globe, 
  Music, 
  Users, 
  Mail,
  Network
} from "lucide-react"
import { useParams } from "next/navigation"

export function Footer() {
  const { t } = useTranslations()
  const params = useParams() as { locale?: string }
  const locale = params?.locale || "en"

  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Main Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/sacred-texts`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Sacred Texts
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/studies`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Studies
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/meditation`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Meditation
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/resources`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Religious Traditions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Religious Traditions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/christianity/overview`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Christianity
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/religion/islam/overview`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Islam
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/religion/hinduism/overview`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Hinduism
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/religion/buddhism/overview`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Buddhism
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/religion/judaism/overview`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Judaism
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Tools */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Resources & Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/listen`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Audio Resources
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/teachings`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Teachings
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/resources/history`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Religious History
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/resources/calendar`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Religious Calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/sitemap`} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Network className="w-4 h-4" />
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/privacy`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2024 Zion.FM. All rights reserved. Dedicated to exploring and sharing spiritual wisdom.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" size="sm">
              <Link href={`/${locale}/sitemap`} className="flex items-center gap-2">
                <Network className="w-4 h-4" />
                View Sitemap
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
} 