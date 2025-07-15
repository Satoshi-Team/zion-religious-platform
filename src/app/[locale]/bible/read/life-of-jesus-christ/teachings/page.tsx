import React from 'react'
import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Book, Heart, Crown, Zap, Sun, Moon, MapPin, Calendar, Building, Cross, Shield, Star, Users, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "The Teachings of Jesus | Bible Study Curriculum",
  description: "Study Jesus' key teachings, parables, and sermons from the Gospels.",
  keywords: ["teachings", "parables", "sermon on the mount", "gospels", "bible study"],
}

export default function TeachingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Teachings of Jesus</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Study Jesus' key teachings, parables, and sermons from the Gospels.
        </p>

        <Tabs defaultValue="sermons" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="sermons">Sermons</TabsTrigger>
            <TabsTrigger value="parables">Parables</TabsTrigger>
            <TabsTrigger value="teachings">Teachings</TabsTrigger>
            <TabsTrigger value="application">Application</TabsTrigger>
          </TabsList>

          <TabsContent value="sermons" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Major Sermons</CardTitle>
                <CardDescription>Jesus' key public teachings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Sun className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Sermon on the Mount</h3>
                    <p className="text-muted-foreground">
                      The Beatitudes and core teachings on discipleship.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Moon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Olivet Discourse</h3>
                    <p className="text-muted-foreground">
                      Teachings about the end times and His return.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Star className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Farewell Discourse</h3>
                    <p className="text-muted-foreground">
                      Final teachings to His disciples before the cross.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="parables" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Parables</CardTitle>
                <CardDescription>Stories that teach spiritual truths</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Kingdom Parables</h3>
                    <p className="text-muted-foreground">
                      Stories about the nature of God's kingdom.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Relationship Parables</h3>
                    <p className="text-muted-foreground">
                      Stories about God's love and forgiveness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Crown className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Judgment Parables</h3>
                    <p className="text-muted-foreground">
                      Stories about accountability and eternal consequences.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teachings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Core Teachings</CardTitle>
                <CardDescription>Essential principles of Jesus' message</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Cross className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Salvation</h3>
                    <p className="text-muted-foreground">
                      The way to eternal life through faith in Christ.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Discipleship</h3>
                    <p className="text-muted-foreground">
                      Following Jesus and living as His disciple.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Kingdom of God</h3>
                    <p className="text-muted-foreground">
                      The nature and values of God's kingdom.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="application" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Modern Application</CardTitle>
                <CardDescription>Applying Jesus' teachings today</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Book className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Personal Life</h3>
                    <p className="text-muted-foreground">
                      How to apply Jesus' teachings in daily living.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Building className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Church Life</h3>
                    <p className="text-muted-foreground">
                      Building community based on Jesus' teachings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">World Impact</h3>
                    <p className="text-muted-foreground">
                      Making a difference through Jesus' principles.
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
              <CardDescription>Tools to help you understand Jesus' teachings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Study Guide</h3>
                  <p className="text-sm text-muted-foreground">In-depth analysis of key teachings</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Discussion Questions</h3>
                  <p className="text-sm text-muted-foreground">Reflect on Jesus' teachings</p>
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
                  <h3 className="font-semibold">Commentary Resources</h3>
                  <p className="text-sm text-muted-foreground">Expert insights on Jesus' teachings</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Video Lessons</h3>
                  <p className="text-sm text-muted-foreground">Visual explanations of key concepts</p>
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