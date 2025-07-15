"use client"

import React from 'react'
import Image from "next/image"
import { useState } from "react"
import { STATION_IMAGES } from "@/lib/constants/station-images"
import { StationImages } from "@/types/station-images"

interface FallbackImageProps {
  src: string
  alt: string
  stationName: string
  className?: string
  fill?: boolean
}

export function FallbackImage({ src, alt, stationName, className }: FallbackImageProps) {
  const [error, setError] = useState(false)
  const images = STATION_IMAGES as StationImages
  
  // Get fallback from station-images.ts
  const getFallbackImage = () => {
    if (images[stationName]) return images[stationName].url

    // Try genre fallback
    const genreKey = `${alt.toLowerCase()}_default`
    if (images[genreKey]) return images[genreKey].url

    // Default fallback
    return images.default.url
  }

  const getFallbackAlt = () => {
    if (images[stationName]) return images[stationName].description

    // Try genre fallback
    const genreKey = `${alt.toLowerCase()}_default`
    if (images[genreKey]) return images[genreKey].description

    // Default fallback
    return alt
  }

  return (
    <div className={className}>
      <Image
        src={error ? getFallbackImage() : src}
        alt={error ? getFallbackAlt() : alt}
        width={400}
        height={300}
        className="object-cover w-full h-full"
        onError={() => setError(true)}
      />
    </div>
  )
} 