'use client'
import React from 'react'
import { TranslationProvider } from '@/lib/translation-provider'
import { HeaderNavigation } from '@/components/header-navigation'
import { Sidebar } from '@/components/sidebar'
import { Footer } from '@/components/footer'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <TranslationProvider>
      <HeaderNavigation />
      <div className="relative flex min-h-screen flex-col">
        <div className="flex flex-1">
          <div className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r bg-background lg:block">
            <Sidebar />
          </div>
          <main className="flex-1 lg:ml-64">
            <div className="container mx-auto px-4 py-6">{children}</div>
          </main>
        </div>
        <Footer />
      </div>
      

      

    </TranslationProvider>
  )
} 