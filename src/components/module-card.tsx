'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import type { Module } from '@/types/content'
import { motion } from 'framer-motion'

interface ModuleCardProps {
  module: Module
  index: number
}

export function ModuleCard({ module, index }: ModuleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <CardHeader className="bg-primary/5">
          <CardTitle className="text-xl font-semibold">
            {module.title}
          </CardTitle>
          <CardDescription>
            {module.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Learning Objectives</h4>
              <ul className="list-disc list-inside space-y-1">
                {module.learningObjectives.map((objective, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    {objective}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Key Terms</h4>
              <ScrollArea className="h-24">
                <div className="flex flex-wrap gap-2">
                  {module.keyTerms.map((term, i) => (
                    <Badge key={i} variant="secondary" className="cursor-help" title={term.definition}>
                      {term.term}
                    </Badge>
                  ))}
                </div>
              </ScrollArea>
            </div>

            <div>
              <h4 className="font-medium mb-2">Resources</h4>
              <div className="grid grid-cols-2 gap-2">
                {module.resources.map((resource, i) => (
                  <Button key={i} variant="outline" size="sm" className="w-full justify-start" asChild>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      <span className="truncate">{resource.title}</span>
                      <Badge variant="secondary" className="ml-auto">
                        {resource.type}
                      </Badge>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 