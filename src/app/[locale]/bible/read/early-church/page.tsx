import React from 'react'
import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Target, Lightbulb, Heart, Users, Sparkles, Church, Globe, Flame } from "lucide-react"

export const metadata: Metadata = {
  title: "The Early Church | Bible Study Curriculum",
  description: "Explore the formation and growth of the early Christian church.",
  keywords: ["early church", "acts", "apostles", "church history", "bible study", "intermediate"],
}

export default function EarlyChurchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Early Church</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Explore the formation and growth of the early Christian church.
        </p>

        <Tabs defaultValue="formation" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="formation">Formation</TabsTrigger>
            <TabsTrigger value="growth">Growth</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
          </TabsList>

          <TabsContent value="formation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Formation of the Church</CardTitle>
                <CardDescription>How the early church began</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Flame className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Pentecost</h3>
                    <p className="text-muted-foreground">
                      The birth of the church at Pentecost.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Church className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">First Community</h3>
                    <p className="text-muted-foreground">
                      The first Christian community in Jerusalem.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Apostolic Leadership</h3>
                    <p className="text-muted-foreground">
                      The role of the apostles in the early church.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="growth" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Growth of the Church</CardTitle>
                <CardDescription>How the church expanded</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Missionary Journeys</h3>
                    <p className="text-muted-foreground">
                      Paul's missionary journeys and church planting.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Community Life</h3>
                    <p className="text-muted-foreground">
                      How early Christians lived and worshiped together.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Church Structure</h3>
                    <p className="text-muted-foreground">
                      Development of church leadership and organization.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Challenges and Persecution</CardTitle>
                <CardDescription>How the early church faced difficulties</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">External Opposition</h3>
                    <p className="text-muted-foreground">
                      Persecution from Jewish and Roman authorities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Internal Challenges</h3>
                    <p className="text-muted-foreground">
                      Dealing with false teaching and division.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Theological Development</h3>
                    <p className="text-muted-foreground">
                      Addressing theological questions and challenges.
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
              <CardDescription>Tools to help you understand the early church</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Timeline Study</h3>
                  <p className="text-sm text-muted-foreground">Explore the early church chronologically</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Map Study</h3>
                  <p className="text-sm text-muted-foreground">Track the spread of the early church</p>
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
                  <p className="text-sm text-muted-foreground">Resources about the early church period</p>
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