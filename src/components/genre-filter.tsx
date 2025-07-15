"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useFilterStore } from "@/stores/filter-store"
import { cn } from "@/lib/utils"
import { Genre } from "@/lib/constants/stations"
import { ChevronRight, Music2, Book, Globe, LucideIcon } from "lucide-react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { useState } from "react"
import { STATION_GENRES } from "@/lib/constants/stations"

// Define the exact categories we have in our data
type CategoryName = 'Christian Music' | 'Jewish & Israeli' | 'Global Religious' | 'Spiritual & Meditation'

// Define genre categories with their subgenres
const GENRE_CATEGORIES: Record<CategoryName, Record<string, Genre[]>> = {
  'Christian Music': {
    'Contemporary': [
      'Christian Contemporary',
      'Christian Pop',
      'Christian Rock',
      'Contemporary Praise',
      'Christian Hip Hop',
      'Christian Metal',
      'Christian Jazz',
      'Christian Country'
    ],
    'Traditional': [
      'Christian Worship',
      'Gospel',
      'Sacred Music',
      'Christian Classical',
      'Christian Instrumental',
      'Hymns',
      'Gregorian Chant'
    ],
    'Teaching & Talk': [
      'Christian Teaching',
      'Christian Talk',
      'Christian Family',
      'Religious Storytelling'
    ]
  },
  'Jewish & Israeli': {
    'Traditional': [
      'Cantorial Music',
      'Klezmer',
      'Sephardic Music',
      'Ashkenazi Chants'
    ],
    'Contemporary': [
      'Israeli Folk',
      'Jewish Pop'
    ]
  },
  'Global Religious': {
    'Asian': [
      'Hindu Devotional',
      'Buddhist Chants',
      'Sikh Shabads',
      'Carnatic Devotional',
      'Bhajans'
    ],
    'Middle Eastern': [
      'Sufi Music',
      'Islamic Nasheeds'
    ],
    'World': [
      'Gospel Reggae',
      'African Gospel',
      'Native Spiritual'
    ]
  },
  'Spiritual & Meditation': {
    'Worship': [
      'Taizé Worship',
      'Spirituals',
      'Worship Choirs',
      'Devotional Music',
      'Prayer Music'
    ],
    'Meditation': [
      'Meditation Music',
      'Sacred Choirs',
      'Psalms and Recitations'
    ],
    'Seasonal': [
      'Advent Songs',
      'Holiday Worship Music'
    ]
  }
}

// Define icons for main categories that have them
const CATEGORY_ICONS: Record<string, LucideIcon> = {
  'Christian Music': Music2,
  'Teaching & Talk': Book,
  'Regional': Globe,
}

export function GenreFilter() {
  const { selectedGenre, setGenre } = useFilterStore()

  return (
    <ScrollArea className="w-full max-h-[60vh] md:max-h-[70vh]">
      <Accordion type="single" collapsible className="w-full">
        {Object.entries(GENRE_CATEGORIES).map(([category, subcategories]) => {
          const Icon = CATEGORY_ICONS[category] || Music2
          
          return (
            <AccordionItem key={category} value={category}>
              <AccordionTrigger className="hover:bg-secondary/10 px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span>{category}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <div className="space-y-4">
                  {Object.entries(subcategories).map(([subcat, genres]) => (
                    <div key={subcat}>
                      <h4 className="text-sm font-medium mb-2">{subcat}</h4>
                      <div className="flex flex-wrap gap-2">
                        {genres.map((genre) => (
                          <Button
                            key={genre}
                            variant="outline"
                            size="sm"
                            onClick={() => setGenre(genre)}
                            className={cn(
                              "rounded-full text-xs",
                              selectedGenre === genre && "bg-primary text-primary-foreground"
                            )}
                          >
                            {genre}
                            {selectedGenre === genre && (
                              <ChevronRight className="w-3 h-3 ml-1" />
                            )}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </ScrollArea>
  )
} 