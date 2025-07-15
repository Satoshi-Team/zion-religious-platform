"use client"

import { Card } from "@/components/ui/card"
import { MEDITATION_GUIDES } from "@/lib/constants/meditation-guides"
import { MeditationCard } from "./meditation-card"

export function MeditationList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {MEDITATION_GUIDES.map((guide) => (
        <MeditationCard key={guide.id} guide={guide} />
      ))}
    </div>
  )
} 