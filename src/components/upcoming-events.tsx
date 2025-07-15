"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CalendarDays, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import { getPlaceholderUrl, imageCategories } from "@/lib/image-utils"

interface Event {
  id: number
  title: string
  description: string
  day: string
  month: string
  year: string
  time: string
  location: string
  registrationLink: string
  slug: string
  image: string
}

export function UpcomingEvents() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8 text-sand-500">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card 
              key={event.id}
              className="overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="flex gap-6 p-6">
                <div className="flex-shrink-0 w-20 h-20 bg-sand-100 rounded-lg flex flex-col items-center justify-center text-center">
                  <div className="font-bold text-2xl text-sand-500">{event.day}</div>
                  <div className="text-sm text-sand-400">{event.month}</div>
                </div>
                <div className="flex-grow">
                  <Link href={`/events/${event.slug}`}>
                    <h3 className="font-bold text-xl text-sand-500 hover:text-sand-400 transition-colors mb-2">
                      {event.title}
                    </h3>
                  </Link>
                  <p className="text-sand-400 mb-4 line-clamp-2">{event.description}</p>
                  <div className="flex flex-col gap-2 text-sm text-sand-400">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      className="w-full border-sand-300 text-sand-500 hover:bg-sand-100 hover:text-sand-500"
                      asChild
                    >
                      <a href={event.registrationLink}>Register Now</a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const events: Event[] = [
  {
    id: 1,
    title: "Worship Night",
    description: "Join us for an evening of worship and prayer.",
    day: "15",
    month: "Dec",
    year: "2023",
    time: "7:00 PM",
    location: "Main Auditorium",
    registrationLink: "/events/worship-night/register",
    slug: "worship-night-december-2023",
    image: getPlaceholderUrl({
      width: 400,
      height: 300,
      category: imageCategories.worship
    })
  },
  {
    id: 2,
    title: "Prayer Meeting",
    description: "A special gathering for corporate prayer and intercession.",
    day: "18",
    month: "Dec",
    year: "2023",
    time: "6:30 PM",
    location: "Chapel",
    registrationLink: "/events/prayer-meeting/register",
    slug: "prayer-meeting-december-2023",
    image: getPlaceholderUrl({
      width: 400,
      height: 300,
      category: imageCategories.prayer
    })
  },
  {
    id: 3,
    title: "Christmas Service",
    description: "Celebrate the birth of Christ with special music and fellowship.",
    day: "25",
    month: "Dec",
    year: "2023",
    time: "10:00 AM",
    location: "Main Auditorium",
    registrationLink: "/events/christmas-service/register",
    slug: "christmas-service-2023",
    image: getPlaceholderUrl({
      width: 400,
      height: 300,
      category: imageCategories.christmas
    })
  }
] 