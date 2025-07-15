'use client'

import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Markdown from 'react-markdown'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
// Assuming Module type is defined and can be imported, or we define a local one.
// For now, let's assume a simplified Module type based on usage.
// import type { Module } from '@/types/content/' 

interface ModuleClientUIProps {
  module: any // Replace 'any' with a proper Module type if available
}

export function ModuleClientUI({ module }: ModuleClientUIProps) {
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<number[]>([])

  if (!module) return <div>Module data is not available.</div> // Or some other fallback

  return (
    <Tabs defaultValue="content" className="space-y-4">
      <TabsList>
        <TabsTrigger value="content">Content</TabsTrigger>
        <TabsTrigger value="resources">Resources</TabsTrigger>
        <TabsTrigger value="quiz">Quiz</TabsTrigger>
        <TabsTrigger value="references">References</TabsTrigger>
      </TabsList>

      <TabsContent value="content" className="space-y-6">
        <Card>
          <CardContent className="prose dark:prose-invert max-w-none p-6">
            <Markdown>{module.content}</Markdown>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
          <ul className="list-disc list-inside space-y-2">
            {module.learningObjectives.map((objective: string, i: number) => (
              <li key={i} className="text-muted-foreground">{objective}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Key Terms</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {module.keyTerms.map((term: any, i: number) => ( // Replace 'any' with a proper KeyTerm type
              <Card key={i}>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{term.term}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{term.definition}</p>
                  {term.context && (
                    <p className="text-xs text-muted-foreground mt-2 italic">{term.context}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="resources">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {module.resources.map((resource: any, i: number) => ( // Replace 'any' with a proper Resource type
            <Card key={i}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">{resource.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge>{resource.type}</Badge>
                      <Badge variant="outline">{resource.difficulty}</Badge>
                      {resource.duration && (
                        <Badge variant="secondary">{resource.duration}</Badge>
                      )}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      Open
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="quiz">
        <div className="space-y-6">
          {module.quiz.map((question: any, i: number) => ( // Replace 'any' with a proper Question type
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">{question.question}</h3>
                <div className="space-y-2">
                  {question.options.map((option: string, j: number) => (
                    <Button
                      key={j}
                      variant={selectedQuizAnswers[i] === j ? 'default' : 'outline'}
                      className="w-full justify-start"
                      onClick={() => {
                        const newAnswers = [...selectedQuizAnswers]
                        newAnswers[i] = j
                        setSelectedQuizAnswers(newAnswers)
                      }}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
                {selectedQuizAnswers[i] !== undefined && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 p-4 rounded-lg bg-muted"
                  >
                    <p className="font-medium">
                      {selectedQuizAnswers[i] === question.correctAnswer
                        ? '✅ Correct!'
                        : '❌ Incorrect'}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {question.explanation}
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="references">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {module.references.map((reference: any, i: number) => ( // Replace 'any' with a proper Reference type
            <Card key={i}>
              <CardContent className="p-4">
                <h3 className="font-semibold">{reference.title}</h3>
                {reference.author && (
                  <p className="text-sm text-muted-foreground">by {reference.author}</p>
                )}
                <div className="flex items-center gap-2 mt-2">
                  <Badge>{reference.type}</Badge>
                  {reference.year && (
                    <Badge variant="outline">{reference.year}</Badge>
                  )}
                </div>
                {reference.url && (
                  <Button variant="link" size="sm" className="mt-2 px-0" asChild>
                    <a href={reference.url} target="_blank" rel="noopener noreferrer">
                      View Source
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
} 