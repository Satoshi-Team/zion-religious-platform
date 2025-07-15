"use client"

import React from 'react'
import { Sidebar } from "../sidebar"
import { BottomNavigation } from "./bottom-navigation"
import { PlayerDrawer } from "./player-drawer"

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90">
      <div className="flex">
        {/* Sidebar - hidden on mobile */}
        <aside className="hidden lg:block w-64 fixed h-[calc(100vh-4rem)] backdrop-blur-md bg-background/60 border-r border-border/40">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 lg:ml-64 p-4 md:p-6 max-w-7xl mx-auto">
          <div className="space-y-6 rounded-xl backdrop-blur-sm bg-background/40 p-6 shadow-lg">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation className="backdrop-blur-lg bg-background/60 border-t border-border/40" />
      </div>

      {/* Player drawer */}
      <PlayerDrawer />
    </div>
  )
} 