'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Link from "next/link"

interface ReligionLink {
  label: string
  href: string
}

interface ReligionSectionProps {
  title: string
  icon: React.ReactNode
  description: string
  links: ReligionLink[]
  featuredPosts: Array<{
    title: string
    slug: string
    description?: string
  }>
}

export function ReligionSection({ title, icon, description, links, featuredPosts }: ReligionSectionProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        {icon}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Navigation Links */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Explore {title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-2">
                {links.map((link) => (
                  <Button
                    key={link.href}
                    variant="ghost"
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={link.href}>
                      {link.label}
                    </Link>
                  </Button>
                ))}
              </div>
              <ScrollBar />
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Featured Articles */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>{title} Featured Articles</CardTitle>
            <CardDescription>Latest and most popular content</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-4">
                {featuredPosts.map((post) => (
                  <div key={post.slug} className="space-y-1">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="font-medium hover:underline"
                    >
                      {post.title}
                    </Link>
                    {post.description && (
                      <p className="text-sm text-muted-foreground">
                        {post.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <ScrollBar />
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 