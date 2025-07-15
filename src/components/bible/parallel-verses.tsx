"use client"

import React from 'react'
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BibleVerse } from "@/types/bible"
import { TranslationSelector } from "./translation-selector"

interface ParallelVersesProps {
  reference: string
  initialVerses: BibleVerse[]
  availableTranslations: string[]
}

export function ParallelVerses({ reference, initialVerses, availableTranslations }: ParallelVersesProps) {
  const [selectedTranslations, setSelectedTranslations] = useState<string[]>(
    initialVerses.map(v => v.translation)
  )

  function handleTranslationChange(value: string) {
    setSelectedTranslations(prev => {
      if (prev.includes(value)) {
        return prev.filter(t => t !== value)
      }
      return [...prev, value]
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Parallel Translations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {availableTranslations.map(translation => (
              <label
                key={translation}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedTranslations.includes(translation)}
                  onChange={() => handleTranslationChange(translation)}
                  className="rounded border-gray-300"
                />
                <span>{translation}</span>
              </label>
            ))}
          </div>

          <Tabs defaultValue={selectedTranslations[0]} className="space-y-4">
            <TabsList>
              {selectedTranslations.map(translation => (
                <TabsTrigger key={translation} value={translation}>
                  {translation}
                </TabsTrigger>
              ))}
            </TabsList>

            {selectedTranslations.map(translation => {
              const verse = initialVerses.find(v => v.translation === translation)
              if (!verse) return null

              return (
                <TabsContent key={translation} value={translation}>
                  <div className="space-y-4">
                    <div className="text-lg italic">
                      "{verse.text}"
                    </div>
                    {verse.context && (
                      <div className="text-sm text-muted-foreground">
                        {verse.context}
                      </div>
                    )}
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </CardContent>
    </Card>
  )
} 