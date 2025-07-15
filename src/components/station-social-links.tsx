"use client"

import React from 'react'
import { Link, Facebook, Instagram, Globe } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Station } from "@/types/station"
import { cn } from "@/lib/utils"

interface StationSocialLinksProps {
  station: Station
}

export function StationSocialLinks({ station }: StationSocialLinksProps) {
  const socialLinks = [
    ...(station.website ? [{
      url: station.website,
      icon: Globe,
      label: "Website",
      color: "text-primary"
    }] : []),
    ...(station.social?.facebook ? [{
      url: station.social.facebook,
      icon: Facebook,
      label: "Facebook",
      color: "text-[#1877F2]"
    }] : []),
    ...(station.social?.instagram ? [{
      url: station.social.instagram,
      icon: Instagram,
      label: "Instagram",
      color: "text-[#E4405F]"
    }] : [])
  ]

  if (socialLinks.length === 0) return null

  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <TooltipProvider>
        {socialLinks.map(({ url, icon: Icon, label, color }) => (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center rounded-full",
                  "p-1 sm:p-1.5 touch-manipulation",
                  "transition-colors hover:bg-muted/50 active:bg-muted",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  color
                )}
              >
                <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span className="sr-only">{label}</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="top" className="hidden sm:block">
              <p className="text-xs">{label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  )
} 