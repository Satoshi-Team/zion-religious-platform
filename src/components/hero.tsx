"use client"

import { Button } from "./ui/button"
import { ChevronRight, Headphones } from "lucide-react"

export function Hero() {
  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-[url('/images/hero-background.jpg')] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url('/images/hero-background.jpg')`
        }}
      />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
            ZION.FM | Understanding Christianity and Beyond: <br className="hidden md:inline" />
            <span className="text-primary">Explore the Rich Tapestry of World Religions</span>
          </h1>
          <p className="text-xl mb-8 animate-fade-up animation-delay-200 max-w-2xl leading-relaxed">
            Discover ZION.FM, your gateway to the world's major religions. Explore in-depth guides, histories, and teachings. Dive into overviews, theology, philosophy, sacred texts, and the evolution of faiths from ancient to modern times. Made for seekers, students, and the curious alike.
          </p>
          <div className="flex gap-4 animate-fade-up animation-delay-300">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white gap-2"
            >
              Start Exploring <Headphones className="w-4 h-4" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20 gap-2"
            >
              Explore Resources <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 