"use client"
import React from 'react'

interface ShellProps {
  children: React.ReactNode
  className?: string
}

export function Shell({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1" {...props}>
        {children}
      </main>
    </div>
  )
} 