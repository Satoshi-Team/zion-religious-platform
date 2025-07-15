"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Globe, ChevronDown } from "lucide-react"
import { useFilterStore } from "@/stores/filter-store"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { GENRE_CATEGORIES } from "@/lib/constants/genres"
import { type GenreSubcategories } from "@/lib/types"
import { LANGUAGES, Language } from "@/lib/constants/languages"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface StationFiltersProps {
  className?: string
}

// Define the interface using the same shape as the store
interface FilterState {
  selectedGenres: string[]
  toggleGenre: (genre: string) => void
  selectedSubgenres: string[]
  toggleSubgenre: (subgenre: string) => void
  selectedSubcategories: string[]
  toggleSubcategory: (subcategory: string) => void
  selectedLanguage: string
  setLanguage: (language: string) => void
  setSearchQuery: (query: string) => void
}

/**
 * Component for filtering stations by genre and subgenre
 */
export function StationFilters() {
  const { 
    selectedGenres, 
    toggleGenre,
    selectedSubgenres,
    toggleSubgenre,
    selectedSubcategories,
    toggleSubcategory,
    selectedLanguage,
    setLanguage,
    setSearchQuery
  } = useFilterStore() as FilterState
  const [expandedGenre, setExpandedGenre] = useState<string | null>(null)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-foreground/80 mb-3">Quick Filters</h3>
        <div className="space-y-[2px]">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start h-10 font-normal",
              "bg-background/95 dark:bg-background/95",
              "hover:bg-accent hover:text-accent-foreground",
              selectedGenres.includes('verified') && "bg-accent/50"
            )}
            onClick={() => toggleGenre('verified')}
          >
            Verified Stations
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start h-10 font-normal",
              "bg-background/95 dark:bg-background/95",
              "hover:bg-accent hover:text-accent-foreground",
              selectedGenres.includes('popular') && "bg-accent/50"
            )}
            onClick={() => toggleGenre('popular')}
          >
            Popular Stations
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start h-10 font-normal",
              "bg-background/95 dark:bg-background/95",
              "hover:bg-accent hover:text-accent-foreground",
              selectedGenres.includes('trending') && "bg-accent/50"
            )}
            onClick={() => toggleGenre('trending')}
          >
            Trending Now
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start h-10 font-normal",
              "bg-background/95 dark:bg-background/95",
              "hover:bg-accent hover:text-accent-foreground",
              selectedGenres.includes('recent') && "bg-accent/50"
            )}
            onClick={() => toggleGenre('recent')}
          >
            Recently Added
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-foreground/80 mb-3">Genres</h3>
        <div className="space-y-[2px]">
          {Object.entries(GENRE_CATEGORIES).map(([category, subcategories]) => (
            <div key={category}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-between h-10 font-normal",
                  "bg-background/95 dark:bg-background/95",
                  "hover:bg-accent hover:text-accent-foreground",
                  expandedGenre === category && "bg-accent/50"
                )}
                onClick={() => setExpandedGenre(expandedGenre === category ? null : category)}
              >
                <span>{category}</span>
                <ChevronDown 
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    expandedGenre === category && "rotate-180"
                  )}
                />
              </Button>
               {expandedGenre === category && (
                 <div className="pl-4 mt-[2px] space-y-[2px]">
                   {Object.entries(subcategories as GenreSubcategories).map(([subCategory, genres]) => (
                     <div key={subCategory} className="mt-2 first:mt-1">
                       <div className="text-sm text-muted-foreground py-1.5">
                         {subCategory}
                       </div>
                       <ScrollArea className="h-[120px] pr-4">
                         <div className="space-y-[2px]">
                           {genres.map(genre => (
                             <Button
                               key={genre}
                               variant="ghost"
                               size="sm"
                               className={cn(
                                 "w-full justify-start font-normal",
                                 "bg-background/95 dark:bg-background/95",
                                 "hover:bg-accent hover:text-accent-foreground",
                                 selectedSubgenres.includes(genre) && "bg-accent/50"
                               )}
                               onClick={() => toggleSubgenre(genre)}
                             >
                               {genre}
                             </Button>
                           ))}
                         </div>
                       </ScrollArea>
                     </div>
                   ))}
                 </div>
               )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 