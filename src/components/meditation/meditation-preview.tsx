'use client'

import React from 'react'
import { Card } from "@/components/ui/card"

export function MeditationPreview() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Daily Meditation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <h3 className="font-semibold">Morning Reflection</h3>
          <p className="text-sm text-gray-600">Start your day with guided spiritual meditation</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Evening Prayer</h3>
          <p className="text-sm text-gray-600">End your day with peaceful meditation</p>
        </Card>
      </div>
    </section>
  )
} 