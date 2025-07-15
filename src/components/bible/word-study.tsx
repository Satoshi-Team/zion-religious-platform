"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BibleWordStudy } from "@/types/bible"
import { bibleService } from "@/lib/services/bible-service"

interface WordStudyProps {
  word: string
  reference: string
  initialStudy?: BibleWordStudy
}

export function WordStudy({ word, reference, initialStudy }: WordStudyProps) {
  const [study, setStudy] = useState<BibleWordStudy | undefined>(initialStudy)
  const [isLoading, setIsLoading] = useState(false)

  async function loadStudy() {
    if (study) return

    setIsLoading(true)
    try {
      const newStudy = await bibleService.getWordStudy(word, reference)
      setStudy(newStudy)
    } catch (error) {
      console.error("Error loading word study:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!study && !isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Word Study: {word}</CardTitle>
          <CardDescription>
            Click to load detailed word study information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <button
            onClick={loadStudy}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Load Word Study
          </button>
        </CardContent>
      </Card>
    )
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Loading Word Study...</CardTitle>
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

  if (!study) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle>Word Study: {word}</CardTitle>
        <CardDescription>
          Detailed analysis of the word in its original language
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="original" className="space-y-4">
          <TabsList>
            <TabsTrigger value="original">Original Language</TabsTrigger>
            <TabsTrigger value="definitions">Definitions</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="etymology">Etymology</TabsTrigger>
          </TabsList>

          <TabsContent value="original" className="space-y-4">
            {study.hebrew && (
              <div className="space-y-2">
                <h3 className="font-medium">Hebrew</h3>
                <div className="p-4 bg-secondary rounded-lg space-y-2">
                  <p className="text-lg">{study.hebrew.text}</p>
                  <p className="text-sm text-muted-foreground">
                    Transliteration: {study.hebrew.transliteration}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Meaning: {study.hebrew.meaning}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Root: {study.hebrew.root}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Part of Speech: {study.hebrew.partOfSpeech}
                  </p>
                </div>
              </div>
            )}

            {study.greek && (
              <div className="space-y-2">
                <h3 className="font-medium">Greek</h3>
                <div className="p-4 bg-secondary rounded-lg space-y-2">
                  <p className="text-lg">{study.greek.text}</p>
                  <p className="text-sm text-muted-foreground">
                    Transliteration: {study.greek.transliteration}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Meaning: {study.greek.meaning}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Root: {study.greek.root}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Part of Speech: {study.greek.partOfSpeech}
                  </p>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="definitions" className="space-y-4">
            {study.definitions.map((def, index) => (
              <div key={index} className="p-4 bg-secondary rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{def.source}</h3>
                  <span className="text-sm text-muted-foreground">
                    {def.partOfSpeech}
                  </span>
                </div>
                <p>{def.definition}</p>
                {def.examples.length > 0 && (
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium">Examples:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      {def.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </TabsContent>

          <TabsContent value="usage" className="space-y-4">
            {study.usage.map((usage, index) => (
              <div key={index} className="p-4 bg-secondary rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{usage.reference}</h3>
                  <span className="text-sm text-muted-foreground">
                    {usage.translation}
                  </span>
                </div>
                <p className="italic">"{usage.text}"</p>
                {usage.context && (
                  <p className="text-sm text-muted-foreground">
                    {usage.context}
                  </p>
                )}
              </div>
            ))}
          </TabsContent>

          <TabsContent value="etymology" className="space-y-4">
            {study.etymology ? (
              <div className="p-4 bg-secondary rounded-lg space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Origin</h3>
                  <p>{study.etymology.origin}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">History</h3>
                  <p>{study.etymology.history}</p>
                </div>
                {study.etymology.cognates.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="font-medium">Cognates</h3>
                    <ul className="list-disc list-inside">
                      {study.etymology.cognates.map((cognate, index) => (
                        <li key={index}>{cognate}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-muted-foreground">
                No etymology information available.
              </p>
            )}
          </TabsContent>
        </Tabs>

        {study.relatedWords.length > 0 && (
          <div className="mt-6 space-y-2">
            <h3 className="font-medium">Related Words</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.relatedWords.map((related, index) => (
                <div key={index} className="p-4 bg-secondary rounded-lg">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{related.word}</h4>
                    <span className="text-sm text-muted-foreground">
                      {related.relationship}
                    </span>
                  </div>
                  {related.references.length > 0 && (
                    <div className="mt-2">
                      <h5 className="text-sm font-medium">References:</h5>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {related.references.map((ref, i) => (
                          <li key={i}>{ref}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 