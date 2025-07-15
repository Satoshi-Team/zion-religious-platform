// Server component - removed 'use client' to allow receiving translation function

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

function safeT(value: any, fallback: string = ''): string {
  return typeof value === 'string' ? value : fallback
}

interface FilterButtonsProps {
  t: any
}

export function FilterButtons({ t }: FilterButtonsProps) {

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{safeT(t.home?.filterButtons?.browseByCategory, 'Browse by Category')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Christianity */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <span className="text-xl">✝️</span>
            <CardTitle>{safeT(t.home?.filterButtons?.christianity, 'Christianity')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/blog?category=Christianity">{safeT(t.home?.filterButtons?.viewArticles, 'View Articles')}</Link>
            </Button>
          </CardContent>
        </Card>
        {/* Islam */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <span className="text-xl">☪️</span>
            <CardTitle>{safeT(t.home?.filterButtons?.islam, 'Islam')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/blog?category=Islam">{safeT(t.home?.filterButtons?.viewArticles, 'View Articles')}</Link>
            </Button>
          </CardContent>
        </Card>
        {/* Buddhism */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <span className="text-xl">☸️</span>
            <CardTitle>{safeT(t.home?.filterButtons?.buddhism, 'Buddhism')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/blog?category=Buddhism">{safeT(t.home?.filterButtons?.viewArticles, 'View Articles')}</Link>
            </Button>
          </CardContent>
        </Card>
        {/* Hinduism */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <span className="text-xl">🕉️</span>
            <CardTitle>{safeT(t.home?.filterButtons?.hinduism, 'Hinduism')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/blog?category=Hinduism">{safeT(t.home?.filterButtons?.viewArticles, 'View Articles')}</Link>
            </Button>
          </CardContent>
        </Card>
        {/* Judaism */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <span className="text-xl">✡️</span>
            <CardTitle>{safeT(t.home?.filterButtons?.judaism, 'Judaism')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/blog?category=Judaism">{safeT(t.home?.filterButtons?.viewArticles, 'View Articles')}</Link>
            </Button>
          </CardContent>
        </Card>
        {/* Sikhism */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <span className="text-xl">🪯</span>
            <CardTitle>{safeT(t.home?.filterButtons?.sikhism, 'Sikhism')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/blog?category=Sikhism">{safeT(t.home?.filterButtons?.viewArticles, 'View Articles')}</Link>
            </Button>
          </CardContent>
        </Card>
        {/* Shinto */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <span className="text-xl">⛩️</span>
            <CardTitle>{safeT(t.home?.filterButtons?.shinto, 'Shinto')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/blog?category=Shinto">{safeT(t.home?.filterButtons?.viewArticles, 'View Articles')}</Link>
            </Button>
          </CardContent>
        </Card>
        {/* Taoism */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <span className="text-xl">☯️</span>
            <CardTitle>{safeT(t.home?.filterButtons?.taoism, 'Taoism')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/blog?category=Taoism">{safeT(t.home?.filterButtons?.viewArticles, 'View Articles')}</Link>
            </Button>
          </CardContent>
        </Card>
        {/* Bahá'í Faith */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <span className="text-xl">🌐</span>
            <CardTitle>{safeT(t.home?.filterButtons?.bahai, 'Bahá\'í Faith')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/blog?category=Baha'i%20Faith">{safeT(t.home?.filterButtons?.viewArticles, 'View Articles')}</Link>
            </Button>
          </CardContent>
        </Card>
        {/* Confucianism */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <span className="text-xl">📜</span>
            <CardTitle>{safeT(t.home?.filterButtons?.confucianism, 'Confucianism')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/blog?category=Confucianism">{safeT(t.home?.filterButtons?.viewArticles, 'View Articles')}</Link>
            </Button>
          </CardContent>
        </Card>
        {/* Rastafarianism */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <span className="text-xl">🦁</span>
            <CardTitle>{safeT(t.home?.filterButtons?.rastafarianism, 'Rastafarianism')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/blog?category=Rastafarianism">{safeT(t.home?.filterButtons?.viewArticles, 'View Articles')}</Link>
            </Button>
          </CardContent>
        </Card>
        {/* Jainism */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <span className="text-xl">🔱</span>
            <CardTitle>{safeT(t.home?.filterButtons?.jainism, 'Jainism')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/blog?category=Jainism">{safeT(t.home?.filterButtons?.viewArticles, 'View Articles')}</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 