import React from 'react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TextCategory } from "@/types/sacred-texts"

interface TextCategoryCardProps {
  category: TextCategory
}

export function TextCategoryCard({ category }: TextCategoryCardProps) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
      <p className="text-muted-foreground mb-6">{category.description}</p>

      <div className="space-y-6">
        {category.texts.map((text) => (
          <div key={text.name} className="border-t pt-4 first:border-t-0 first:pt-0">
            <h4 className="font-medium mb-2">{text.name}</h4>
            {text.content && (
              <p className="text-sm text-muted-foreground mb-3">{text.content}</p>
            )}
            {text.chapters && (
              <p className="text-sm text-muted-foreground mb-3">
                Chapters: {text.chapters}
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              {text.themes.map((theme) => (
                <Badge key={theme} variant="outline">
                  {theme}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
} 