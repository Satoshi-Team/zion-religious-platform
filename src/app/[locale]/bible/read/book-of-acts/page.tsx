import React from 'react'
import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Target, Lightbulb, Heart, Users, Sparkles, Globe, Church, Flame, Map } from "lucide-react"

export const metadata: Metadata = {
  title: "The Book of Acts | Bible Study Curriculum",
  description: "Study the historical account of the early church's growth and expansion.",
  keywords: ["acts", "apostles", "early church", "missionary journeys", "bible study", "intermediate"],
}

export default function BookOfActsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Book of Acts</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Study the historical account of the early church's growth and expansion.
        </p>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="journeys">Journeys</TabsTrigger>
            <TabsTrigger value="themes">Themes</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Overview of Acts</CardTitle>
                <CardDescription>Understanding the book's structure and purpose</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Author and Purpose</h3>
                    <p className="text-muted-foreground">
                      Luke's purpose in writing Acts and its connection to his Gospel.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Flame className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Key Events</h3>
                    <p className="text-muted-foreground">
                      Major events in the early church's development.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Church className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Church Growth</h3>
                    <p className="text-muted-foreground">
                      How the church expanded from Jerusalem to Rome.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="journeys" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Missionary Journeys</CardTitle>
                <CardDescription>Paul's travels and church planting</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Map className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">First Journey</h3>
                    <p className="text-muted-foreground">
                      Paul and Barnabas' first missionary journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Second Journey</h3>
                    <p className="text-muted-foreground">
                      Paul's second journey with Silas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Third Journey</h3>
                    <p className="text-muted-foreground">
                      Paul's final journey and trip to Rome.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="themes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Themes</CardTitle>
                <CardDescription>Major themes in the Book of Acts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Holy Spirit</h3>
                    <p className="text-muted-foreground">
                      The role of the Holy Spirit in the early church.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Community</h3>
                    <p className="text-muted-foreground">
                      The nature of early Christian community.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Witness</h3>
                    <p className="text-muted-foreground">
                      The church's mission to witness to Christ.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Learning</CardTitle>
              <CardDescription>Tools to help you understand Acts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Journey Maps</h3>
                  <p className="text-sm text-muted-foreground">Interactive maps of Paul's journeys</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Timeline Study</h3>
                  <p className="text-sm text-muted-foreground">Chronological study of events</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Study Resources</CardTitle>
              <CardDescription>Additional materials for deeper study</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Historical Context</h3>
                  <p className="text-sm text-muted-foreground">Resources about the Roman world</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Study Guides</h3>
                  <p className="text-sm text-muted-foreground">In-depth guides for each section</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 