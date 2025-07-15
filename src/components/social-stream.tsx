"use client"

import React from 'react'
import { Facebook } from "lucide-react"

export function SocialStream() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
      <div className="space-y-4">
        {/* Social Media Links */}
        <div className="flex gap-4">
          <a
            href="https://facebook.com/zionfm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <Facebook className="h-4 w-4" />
            Follow on Facebook
          </a>
        </div>

        {/* Recent Social Posts */}
        <div className="space-y-3">
          <div className="rounded-md bg-muted p-3">
            <p className="text-sm">
              Join us this Sunday for our special Christmas broadcast! 🎄 #ZionFM
              #ChristianRadio
            </p>
            <span className="mt-1 text-xs text-muted-foreground">2 hours ago</span>
          </div>
          <div className="rounded-md bg-muted p-3">
            <p className="text-sm">
              New worship songs added to our playlist today! Listen now on Zion.FM
              📻 #ChristianMusic
            </p>
            <span className="mt-1 text-xs text-muted-foreground">5 hours ago</span>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="flex gap-2">
          <button className="rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
            Share
          </button>
          <button className="rounded-full bg-secondary px-4 py-1 text-xs font-medium">
            Follow
          </button>
        </div>
      </div>
    </div>
  )
} 