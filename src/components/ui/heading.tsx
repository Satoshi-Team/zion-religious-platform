"use client"
import React from 'react'

interface HeadingProps {
  title: string
  description?: string
  className?: string
}

export function Heading({ title, description, className = "" }: HeadingProps) {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      {description && (
        <p className="text-muted-foreground mt-2">{description}</p>
      )}
    </div>
  )
} 