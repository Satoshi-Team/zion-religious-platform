"use client"

import React from 'react'
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BibleOriginalLanguage } from "@/types/bible"
import { bibleService } from "@/lib/services/bible-service"

interface OriginalLanguageProps {
  reference: string
  initialData?: BibleOriginalLanguage
}

export function OriginalLanguage({ reference, initialData }: OriginalLanguageProps) {
  const [data, setData] = useState<BibleOriginalLanguage | undefined>(initialData)
  const [isLoading, setIsLoading] = useState(false)

  async function loadData() {
    if (data) return

    setIsLoading(true)
    try {
      const newData = await bibleService.getOriginalLanguage(reference)
      setData(newData)
    } catch (error) {
      console.error("Error loading original language:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!data && !isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Original Language</CardTitle>
          <CardDescription>
            Click to load original language text and analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <button
            onClick={loadData}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Load Original Language
          </button>
        </CardContent>
      </Card>
    )
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Loading Original Language...</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-secondary rounded w-3/4"></div>
            <div className="h-4 bg-secondary rounded w-1/2"></div>
            <div className="h-4 bg-secondary rounded w-2/3"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!data) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle>Original Language</CardTitle>
        <CardDescription>
          Original language text and grammatical analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="text" className="space-y-4">
          <TabsList>
            <TabsTrigger value="text">Text</TabsTrigger>
            <TabsTrigger value="morphology">Morphology</TabsTrigger>
            <TabsTrigger value="syntax">Syntax</TabsTrigger>
          </TabsList>

          <TabsContent value="text" className="space-y-4">
            {data.hebrew && (
              <div className="space-y-2">
                <h3 className="font-medium">Hebrew Text</h3>
                <div className="p-4 bg-secondary rounded-lg space-y-2">
                  <p className="text-lg">{data.hebrew.text}</p>
                  <p className="text-sm text-muted-foreground">
                    Transliteration: {data.transliteration}
                  </p>
                </div>
              </div>
            )}

            {data.greek && (
              <div className="space-y-2">
                <h3 className="font-medium">Greek Text</h3>
                <div className="p-4 bg-secondary rounded-lg space-y-2">
                  <p className="text-lg">{data.greek.text}</p>
                  <p className="text-sm text-muted-foreground">
                    Transliteration: {data.transliteration}
                  </p>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="morphology" className="space-y-4">
            {data.morphology.map((word, index) => (
              <div key={index} className="p-4 bg-secondary rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{word.word}</h3>
                  <span className="text-sm text-muted-foreground">
                    {word.language}
                  </span>
                </div>
                <div className="space-y-2">
                  {Object.entries(word.analysis).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-muted-foreground">{key}:</span>
                      <span>
                        {typeof value === 'object' && value !== null
                          ? JSON.stringify(value)
                          : String(value)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="syntax" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Clauses</h3>
                {data.syntax.clauses.map((clause, index) => (
                  <div key={index} className="p-4 bg-secondary rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{clause.type}</h4>
                      <span className="text-sm text-muted-foreground">
                        {clause.function}
                      </span>
                    </div>
                    <p className="text-sm">{clause.words.join(" ")}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Relationships</h3>
                {data.syntax.relationships.map((rel, index) => (
                  <div key={index} className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{rel.from}</span>
                      <span className="text-sm text-muted-foreground">
                        {rel.type}
                      </span>
                      <span className="text-sm">{rel.to}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
} 