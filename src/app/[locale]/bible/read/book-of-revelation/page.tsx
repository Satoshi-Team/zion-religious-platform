import React from 'react'
import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Target, Lightbulb, Heart, Users, Sparkles, Scroll, Eye, Crown, Star, Flame } from "lucide-react"

export const metadata: Metadata = {
  title: "The Book of Revelation | Bible Study Curriculum",
  description: "Study the apocalyptic literature and end times prophecy in depth.",
  keywords: ["revelation", "apocalypse", "end times", "prophecy", "bible study", "intermediate"],
}

export default function BookOfRevelationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Book of Revelation</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Study the apocalyptic literature and end times prophecy in depth.
        </p>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="visions">Visions</TabsTrigger>
            <TabsTrigger value="interpretation">Interpretation</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Overview of Revelation</CardTitle>
                <CardDescription>Understanding the book's structure and purpose</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Scroll className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Author and Context</h3>
                    <p className="text-muted-foreground">
                      John's vision and the historical setting.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Eye className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Apocalyptic Literature</h3>
                    <p className="text-muted-foreground">
                      Understanding the genre and its features.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Crown className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Christ's Victory</h3>
                    <p className="text-muted-foreground">
                      The triumph of Christ and His kingdom.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="visions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Visions</CardTitle>
                <CardDescription>Major visions and their meaning</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Star className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Seven Churches</h3>
                    <p className="text-muted-foreground">
                      Messages to the seven churches of Asia.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Flame className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Seals and Trumpets</h3>
                    <p className="text-muted-foreground">
                      The unfolding of God's judgment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">New Jerusalem</h3>
                    <p className="text-muted-foreground">
                      The glorious future of God's people.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interpretation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Interpretation Approaches</CardTitle>
                <CardDescription>Understanding different views</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Historical Context</h3>
                    <p className="text-muted-foreground">
                      Understanding the first-century setting.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Symbolic Language</h3>
                    <p className="text-muted-foreground">
                      Interpreting apocalyptic symbols.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Future Fulfillment</h3>
                    <p className="text-muted-foreground">
                      Understanding end times prophecy.
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
              <CardDescription>Tools to help you understand Revelation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Vision Timeline</h3>
                  <p className="text-sm text-muted-foreground">Study the sequence of visions</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Symbol Guide</h3>
                  <p className="text-sm text-muted-foreground">Understand apocalyptic symbols</p>
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
                  <p className="text-sm text-muted-foreground">Expert insights on Revelation</p>
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