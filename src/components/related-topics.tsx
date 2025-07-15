import React from 'react'
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface RelatedTopic {
  title: string
  href: string
}

interface RelatedTopicsProps {
  topics: RelatedTopic[]
  className?: string
}

export function RelatedTopics({ topics, className = "" }: RelatedTopicsProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Related Topics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4">
          {topics.map((topic, index) => (
            <Link
              key={index}
              href={topic.href}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              {topic.title}
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 