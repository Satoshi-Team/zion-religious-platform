import React from 'react'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Christian Theology Portal',
  description: 'Comprehensive resource for Christian theological studies'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        {children}
      </div>
    </div>
  )
} 