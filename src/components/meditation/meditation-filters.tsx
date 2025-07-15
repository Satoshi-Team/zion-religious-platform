"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Filter } from "lucide-react"
import { pageStyles } from "@/styles/shared-styles"

export function MeditationFilters() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className={`gap-2 ${pageStyles.components.filters.button}`}
        >
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end"
        className={pageStyles.components.filters.menu}
      >
        <DropdownMenuItem className={pageStyles.components.filters.item}>
          All Meditations
        </DropdownMenuItem>
        <DropdownMenuItem className={pageStyles.components.filters.item}>
          Morning
        </DropdownMenuItem>
        <DropdownMenuItem className={pageStyles.components.filters.item}>
          Evening
        </DropdownMenuItem>
        <DropdownMenuItem className={pageStyles.components.filters.item}>
          Guided
        </DropdownMenuItem>
        <DropdownMenuItem className={pageStyles.components.filters.item}>
          Silent
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 