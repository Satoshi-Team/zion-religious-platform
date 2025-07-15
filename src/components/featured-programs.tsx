"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"
import { useState } from "react"
import { getPlaceholderUrl, imageCategories } from "@/lib/image-utils"

interface Program {
  id: number
  title: string
  description: string
  image: string
  link: string
  time: string
  host: string
}

export function FeaturedPrograms() {
  const [loadingStates, setLoadingStates] = useState<{ [key: number]: boolean }>({})

  const handleImageLoad = (id: number) => {
    setLoadingStates(prev => ({ ...prev, [id]: false }))
  }

  const handleImageError = (id: number) => {
    setLoadingStates(prev => ({ ...prev, [id]: false }))
  }

  return (
    <section className="py-12 bg-sand-100/20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8 text-sand-500">Featured Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card 
              key={program.id} 
              className="overflow-hidden border-sand-200 transition-all hover:shadow-lg"
            >
              <div className="relative h-48">
                {loadingStates[program.id] && (
                  <Skeleton className="absolute inset-0" />
                )}
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                  onLoadingComplete={() => handleImageLoad(program.id)}
                  onError={() => handleImageError(program.id)}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={program.id <= 3}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-sand-500">{program.title}</h3>
                <p className="text-sand-400 mb-4 line-clamp-2">{program.description}</p>
                <div className="flex justify-between items-center text-sm text-sand-400">
                  <span>{program.time}</span>
                  <span>{program.host}</span>
                </div>
                <Button 
                  className="w-full mt-4"
                  asChild
                >
                  <a href={program.link}>Learn More</a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const programs: Program[] = [
  {
    id: 1,
    title: "Morning Devotional",
    description: "Start your day with inspiring messages and prayer, featuring daily scripture readings and spiritual reflection.",
    image: getPlaceholderUrl({
      width: 800,
      height: 400,
      category: imageCategories.prayer
    }),
    link: "/programs/morning-devotional",
    time: "6:00 AM Daily",
    host: "Pastor David Chen"
  },
  {
    id: 2,
    title: "Sunday Service",
    description: "Join us for weekly worship and teaching, featuring contemporary Christian music and powerful messages.",
    image: getPlaceholderUrl({
      width: 800,
      height: 400,
      category: imageCategories.worship
    }),
    link: "/programs/sunday-service",
    time: "10:00 AM Sundays",
    host: "Rev. Sarah Johnson"
  },
  {
    id: 3,
    title: "Youth Hour",
    description: "Dynamic programs designed for young believers, with modern worship and relevant teachings.",
    image: getPlaceholderUrl({
      width: 800,
      height: 400,
      category: imageCategories.youth
    }),
    link: "/programs/youth-hour",
    time: "7:00 PM Fridays",
    host: "Mike Williams"
  }
] 