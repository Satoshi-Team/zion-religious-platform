"use client"

import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

interface MeditationSearchProps {
  onSearch: (query: string) => void
}

export function MeditationSearch({ onSearch }: MeditationSearchProps) {
  return (
    <div className="flex gap-2">
      <Input 
        placeholder="Search meditations..." 
        className="max-w-sm"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Button variant="outline" size="icon">
        <Search className="h-4 w-4" />
      </Button>
    </div>
  )
} 