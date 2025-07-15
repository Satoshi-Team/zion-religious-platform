import React from 'react'
import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Target, Lightbulb, Heart, Users, Sparkles, Crown, Cross, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "The Life of Jesus Christ | Bible Study Curriculum",
  description: "Explore the life, ministry, and teachings of Jesus Christ in depth.",
  keywords: ["jesus", "christ", "gospels", "ministry", "teachings", "bible study", "intermediate"],
}

export default function LifeOfJesusPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Life of Jesus Christ</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Explore the life, ministry, and teachings of Jesus Christ in depth.
        </p>

        <Tabs defaultValue="life" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="life">Life</TabsTrigger>
            <TabsTrigger value="ministry">Ministry</TabsTrigger>
            <TabsTrigger value="teachings">Teachings</TabsTrigger>
          </TabsList>

          <TabsContent value="life" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Life of Jesus</CardTitle>
                <CardDescription>Key events in Jesus' life</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Star className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Birth and Early Life</h3>
                    <p className="text-muted-foreground">
                      Jesus' birth, childhood, and early years.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Public Ministry</h3>
                    <p className="text-muted-foreground">
                      Jesus' three-year public ministry.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Cross className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Death and Resurrection</h3>
                    <p className="text-muted-foreground">
                      Jesus' crucifixion and resurrection.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ministry" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ministry of Jesus</CardTitle>
                <CardDescription>Key aspects of Jesus' ministry</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Miracles and Healings</h3>
                    <p className="text-muted-foreground">
                      Jesus' miraculous works and healings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Disciples and Followers</h3>
                    <p className="text-muted-foreground">
                      Jesus' relationship with His disciples.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Opposition and Conflict</h3>
                    <p className="text-muted-foreground">
                      Jesus' encounters with religious leaders.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teachings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Teachings of Jesus</CardTitle>
                <CardDescription>Key teachings and parables</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Parables</h3>
                    <p className="text-muted-foreground">
                      Jesus' teaching through parables.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Sermons</h3>
                    <p className="text-muted-foreground">
                      Major sermons and discourses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Crown className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Kingdom of God</h3>
                    <p className="text-muted-foreground">
                      Jesus' teaching about God's kingdom.
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
              <CardDescription>Tools to help you understand Jesus' life</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Timeline Study</h3>
                  <p className="text-sm text-muted-foreground">Explore Jesus' life chronologically</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Gospel Comparison</h3>
                  <p className="text-sm text-muted-foreground">Compare the four Gospel accounts</p>
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
                  <p className="text-sm text-muted-foreground">Resources about Jesus' historical setting</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Study Guides</h3>
                  <p className="text-sm text-muted-foreground">In-depth guides for each aspect</p>
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