"use client"

import Image from "next/image"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import { getPlaceholderUrl, imageCategories } from "@/lib/image-utils"

interface NewsItem {
  id: number
  title: string
  excerpt: string
  category: string
  image: string
  date: string
  author: string
  slug: string
}

export function NewsSection() {
  const [loadingStates, setLoadingStates] = useState<{ [key: number]: boolean }>({})

  const handleImageLoad = (id: number) => {
    setLoadingStates(prev => ({ ...prev, [id]: false }))
  }

  const handleImageError = (id: number) => {
    setLoadingStates(prev => ({ ...prev, [id]: false }))
    // Could implement error UI here
  }

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8 text-sand-500">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Link href={`/news/${item.slug}`} key={item.id}>
              <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  {loadingStates[item.id] && (
                    <Skeleton className="absolute inset-0" />
                  )}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    onLoadingComplete={() => handleImageLoad(item.id)}
                    onError={() => handleImageError(item.id)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={item.id <= 2} // Prioritize first 2 news items
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-sm text-white font-medium px-2 py-1 bg-sand-500/80 rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3 text-sm text-sand-400">
                    <span>{item.author}</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-sand-500 group-hover:text-sand-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sand-400 line-clamp-2">{item.excerpt}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Community Outreach Program Launches",
    excerpt: "Join us in our new initiative to support local communities through music and faith.",
    category: "Community",
    image: getPlaceholderUrl({
      width: 800,
      height: 400,
      category: imageCategories.community
    }),
    date: "December 15, 2023",
    author: "Sarah Johnson",
    slug: "community-outreach-program-launches"
  },
  {
    id: 2,
    title: "New Worship Album Release",
    excerpt: "Local artists collaborate on an inspiring new worship album.",
    category: "Music",
    image: getPlaceholderUrl({
      width: 800,
      height: 400,
      category: imageCategories.worship
    }),
    date: "December 12, 2023",
    author: "Michael Chen",
    slug: "new-worship-album-release"
  },
  {
    id: 3,
    title: "Youth Conference 2024",
    excerpt: "Our annual youth conference returns with powerful speakers and workshops.",
    category: "Events",
    image: getPlaceholderUrl({
      width: 800,
      height: 400,
      category: imageCategories.youth
    }),
    date: "December 10, 2023",
    author: "David Wilson",
    slug: "youth-conference-2024"
  }
] 